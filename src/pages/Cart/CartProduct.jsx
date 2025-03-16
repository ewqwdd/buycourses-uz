import PropTypes from 'prop-types'
import { cva } from '../../shared/lib/cva'
import $api from '../../shared/lib/$api'
import useUserStore from '../../shared/store/useUserStore'
import { typings } from '../../shared/lib/typings'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router'
import { useState } from 'react'

export default function CartProduct({ name, image, className, amount, id }) {
  const picStyles = 'rounded-t-lg rounded-b-[4px] bg-foreground1 h-48 w-full object-cover'
  const addBasket = useUserStore((state) => state.addBasket)
  const deleteBasket = useUserStore((state) => state.deleteBasket)
  const navigate = useNavigate()
  const [loading, setLoading] = useState()

  const addToBasket = () => {
    setLoading(true)
    $api
      .post('/products/cart/' + id)
      .then(({ data }) => {
        addBasket(data)
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
      .finally(() => setLoading(false))
  }

  const deleteFromBasket = () => {
    setLoading(true)
    $api
      .delete('/products/cart/' + id)
      .then(() => {
        deleteBasket(id)
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
      .finally(() => setLoading(false))
  }

  return (
    <div
      className={cva('rounded-xl bg-background p-1 border border-foreground1 flex flex-col gap-3', className, {
        'animate-pulse pointer-events-none': loading,
      })}
    >
      {!image ? <div className={picStyles} /> : <img src={image} alt="preview" className={picStyles} />}
      <div className="px-4 flex pb-4 overflow-x-hidden max-w-full justify-between gap-2">
        <h2 className="font-semibold text-xl text-primary overflow-x-clip text-ellipsis text-nowrap">{name}</h2>
        <div className="flex [&_*]:size-6 [&_button]:text-xl text-center">
          <button onClick={deleteFromBasket}>-</button>
          <div className="flex items-center justify-center">{amount ?? 1}</div>

          <button onClick={addToBasket}>+</button>
        </div>
      </div>
    </div>
  )
}

CartProduct.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  amount: PropTypes.number,
  id: PropTypes.number,
}
