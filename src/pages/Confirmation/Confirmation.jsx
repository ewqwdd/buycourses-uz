import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { Card } from '../../shared/ui/Card'
import { Main } from '../../widgets/Main'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import toast from 'react-hot-toast'
import $api from '../../shared/lib/$api'
import { cva } from '../../shared/lib/cva'
import { Button } from '../../shared/ui/Button'
import Right from '../../shared/icons/RIght.svg'
import { useEffect } from 'react'

const fetchTransaction = async ({ queryKey }) => {
  try {
    const { data } = await $api.get(`/transactions/${queryKey[1]}`)
    return data
  } catch (error) {
    console.error('Ошибка при загрузке транзакции:', error)
    if (error instanceof AxiosError) {
      toast.error(error.response?.data?.message || 'Ошибка при загрузке транзакции')
    }
    throw error
  }
}

export default function Confirmation() {
  const [searchParams] = useSearchParams()
  const title = searchParams.get('payment_status') === 'cancelled' ? 'Платеж отклонен' : 'Оплачено'
  const id = searchParams.get('id')
  const navigate = useNavigate()

  const { isFetching, isLoading, error, data } = useQuery({
    queryKey: ['transaction', id],
    queryFn: fetchTransaction,
    staleTime: 5 * 60 * 1000,
    retry: 0,
  })

  useEffect(() => {
    if (error) {
      navigate('/')
    }
  }, [error])

  return (
    <Main>
      <Card
        className={cva('flex flex-col items-center justify-center min-h-[482px] gap-3', {
          'animate-pulse pointer-events-none': isFetching || isLoading,
        })}
      >
        {!(isFetching || isLoading) && (
          <>
            <h1 className="text-2xl font-semibold text-primary">{title}</h1>
            <p className="text-secondary mt-2 text-base font-medium text-center">
              Ваш баланс пополнен на <b className="text-accentSecondary font-semibold">{data?.amount}</b> UZS
            </p>
            <Button size="sm" as={Link} to="/">
              Перейти к покупкам <Right />
            </Button>
          </>
        )}
      </Card>
    </Main>
  )
}
