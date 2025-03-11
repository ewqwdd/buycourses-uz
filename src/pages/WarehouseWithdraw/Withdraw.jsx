import { useRef, useState } from 'react'
import { Card } from '../../shared/ui/Card'
import { Input } from '../../shared/ui/Input'
import { formatPrice } from '../../shared/lib/formatPrice'
import { cva } from '../../shared/lib/cva'
import { Button } from '../../shared/ui/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import $api from '../../shared/lib/$api'
import { digitRegex } from '../../shared/lib/regex'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import { typings } from '../../shared/lib/typings'

export default function Withdraw({ sum, setSum }) {
  const cardRef = useRef()
  const [loading, setLoading] = useState(false)
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (data) => {
      setLoading(true)
      return $api
        .post('/withdraws', data)
        .then(() => {
          setSum(null)
        })
        .catch((err) => {
          console.error(err)
          if (err instanceof AxiosError) {
            toast.error(err.response?.data?.message)
            return
          }
          toast.error(typings.withdrawError)
        })
        .finally(() => {
          setLoading(false)
        })
    },
    mutationKey: 'withdraws_mutate',
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: 'withdraws', refetchType: 'all' })
    },
  })

  const onKeyDown = (e) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab']

    if (!digitRegex.test(e.key) && !allowedKeys.includes(e.key) && !e.ctrlKey) {
      e.preventDefault()
    }
  }

  const onSubmit = () => {
    const cardNumber = cardRef.current.value
    if (cardNumber.length < 16 || !digitRegex.test(cardNumber)) {
      toast.error(typings.cardError)
      return
    }
    mutation.mutate({ cardNumber, amount: sum })
  }

  return (
    <Card className="min-h-[482px] items-center justify-center flex-1">
      <div
        className={cva('self-center flex flex-col max-w-[312px] w-full gap-4', {
          'animate-pulse pointer-events-none': loading,
        })}
      >
        <div className="flex justify-between">
          <span className="text-secondary  text-sm">{typings.withdrawPlaceholder}:</span>
          <span className="text-secondary font-bold text-sm">{formatPrice(parseFloat(sum))}</span>
        </div>
        <Input onKeyDown={onKeyDown} placeholder={typings.cardNumber} ref={cardRef} />
        <Button onClick={onSubmit}>{typings.withdraw}</Button>
      </div>
    </Card>
  )
}
