import React from 'react'
import { Button } from '../../shared/ui/Button'
import Right from '../../shared/icons/RIght.svg'
import useUserStore from '../../shared/store/useUserStore'
import { Material } from '../../widgets/Material'
import $api from '../../shared/lib/$api'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router'
import { typings } from '../../shared/lib/typings'

export default function ItemContent({ data }) {
  const purchasedItems = useUserStore((state) => state.purchasedProducts) ?? []
  const userItems = useUserStore((state) => state.products) ?? []
  const navigate = useNavigate()

  const addPurchase = useUserStore((state) => state.addPurchase)
  const purchasedIem = purchasedItems.find((item) => item.id === data.id)
  const userItem = userItems.find((item) => item.id === data.id)

  let materials = []
  if (purchasedIem) {
    materials = purchasedIem.materials
  } else if (userItem) {
    materials = userItem.materials
  }

  const buyItem = () => {
    $api
      .post('/products/buy', { productId: data.id })
      .then(({ data }) => {
        addPurchase(data)
        toast.success(typings.productBought)
      })
      .catch((err) => {
        if (err instanceof AxiosError) {
          if (err.response.status === 401) {
            navigate('/login')
          }
          toast.error(err.response?.data?.message)
          return
        }
        toast.error(typings.buyError)
      })
  }

  const blocked = !import.meta.env.VITE_CAN_BUY_MULTIPLE && (purchasedIem || userItem)

  return (
    <>
      <div
        className="text-sm font-medium text-secondary redactor-styles redactor-render w-full pl-2"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
      {!blocked && (
        <>
          <span className="text-base mt-3 text-primary font-semibold">{data.price} {typings.currency}</span>
          <Button className="min-w-[328px] mt-1" onClick={buyItem}>
            {typings.buy} <Right className="size-4" />
          </Button>
        </>
      )}
    </>
  )
}
