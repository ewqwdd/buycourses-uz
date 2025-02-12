import { useState } from 'react'
import { Card } from '../../shared/ui/Card'
import { Title } from '../../shared/ui/Title'
import { AsideWrapper } from '../../widgets/AsideWrapper'
import { CreationCard } from '../../widgets/CreationCard'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ProductForm } from '../../widgets/ProductForm'
import $api from '../../shared/lib/$api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useUserStore from '../../shared/store/useUserStore'
import { useNavigate } from 'react-router'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import { cva } from '../../shared/lib/cva'
import { useCategories } from '../../shared/hooks/useCategories'

export default function Create() {
  const [isLoading, setIsLoading] = useState()
  const addProduct = useUserStore((state) => state.addProduct)
  const navigate = useNavigate()
  const {data: categories} = useCategories()
  const queryClient = useQueryClient()

  const mutation = useMutation({
    onSuccess: (_, variables) => {
      if (variables.categoryId !== -1) {
        const category = categories.find(e => e.id === variables.categoryId)
        if (!category) return
        queryClient.invalidateQueries({
          queryKey: ['category', category.slug],
        })
        queryClient.resetQueries({
          queryKey: ['category', category.slug],
        })
      } else {
        queryClient.invalidateQueries({
          queryKey: ['categories'],
        })
      }
    },
    mutationFn: (values) => {
      const formData = new FormData()
      for (const key in values) {
        if (key === 'materials') {
          const material = JSON.stringify(values[key])
          formData.append('materials', material)
        } else {
          formData.append(key, values[key])
        }
      }
      setIsLoading(true)
      return $api
        .post('/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        })
        .then((data) => {
          addProduct({ ...values, id: data.data.id, slug: data.data.slug })
          navigate('/')
        })
        .catch((err) => {
          console.error(err)
          setIsLoading(false)
          if (err instanceof AxiosError) {
            toast.error(err.response.data?.message)
            return
          }
          toast.error('Ошибка добавления')
        })
    },
  })

  const submit = (values) => {
    mutation.mutate(values)
  }

  return (
    <Main>
      <Title title="Создание объявления" />
      <DefaultHeader title={'Создание объявления'} subTitle={'0 товаров'} />
      <div className="flex gap-20 mt-10 relative z-[1]">
        <AsideWrapper className="gap-4">
          <CreationCard />
        </AsideWrapper>
        <Card
          className={cva('p-10 gap-5 flex-1 flex flex-col', {
            'animate-pulse pointer-events-none': isLoading,
          })}
        >
          <ProductForm onSubmit={submit} />
        </Card>
      </div>
    </Main>
  )
}
