import { useState } from 'react'
import $api from '../../shared/lib/$api'
import { Button } from '../../shared/ui/Button'
import { Card } from '../../shared/ui/Card'
import toast from 'react-hot-toast'
import useUserStore from '../../shared/store/useUserStore'
import { cva } from '../../shared/lib/cva'
import { AxiosError } from 'axios'
import { formatCurrency } from '../../shared/lib/formatCurrecny'

export default function Deposit({ sum, setSum }) {
  const [loading, setLoading] = useState(false)
  const setBalance = useUserStore((state) => state.setBalance)
  const addTransaction = useUserStore((state) => state.addTransaction)
  const balance = useUserStore((state) => state.user?.balance) ?? 0

  const onSubmit = () => {
    $api
      .post('/deposit', { amount: parseFloat(sum) })
      .then(() => {
        toast.success('Баланс пополнен')
        setBalance(balance + parseFloat(sum))
        addTransaction({
          amount: parseFloat(sum),
          createdAt: new Date().toISOString(),
          type: 'deposit',
        })
        setSum(null)
      })
      .catch((err) => {
        console.error(err)
        if (err instanceof AxiosError) {
          toast.error(err.response?.data?.message || 'Ошибка пополнения')
          return
        }
        toast.error('Ошибка поплнения')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <Card className="min-h-[482px] items-center justify-center flex-1">
      <div
        className={cva('flex flex-col items-center gap-4', {
          'animate-pulse pointer-events-none': loading,
        })}
      >
        <p className="text-teritary text-base font-semibold text-center">
          Переведите {sum} {formatCurrency(sum)} на карту {import.meta.env.VITE_CARD_NUMBER} <br />и нажмите накнопку “Я оплатил”
        </p>
        <Button size="sm" onClick={onSubmit}>
          Я оплатил
        </Button>
      </div>
    </Card>
  )
}
