import { useMemo, useState } from 'react'
import { formatPrice } from '../../shared/lib/formatPrice'
import useUserStore from '../../shared/store/useUserStore'
import { Card } from '../../shared/ui/Card'
import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { TopUpSidebar } from '../../widgets/TopUpSidebar'
import TransactionsTable from './TransactionsTable'
import { cva } from '../../shared/lib/cva'
import toast from 'react-hot-toast'
import $api from '../../shared/lib/$api'

export default function TopUp() {
  const balance = useUserStore((state) => state.user?.balance) ?? 0
  const transactions = useUserStore((state) => state.transactions) ?? []
  const filtered = useMemo(() => transactions.filter((e) => e.type === 'deposit' && e.status === 'completed'), [transactions])

  const [loading, setLoading] = useState(false)

  const balanceText = `Баланс ${formatPrice(balance)}`

  const onSubmit = (sum) => {
    if (!sum) {
      toast.error('Введите сумму')
      return
    }
    setLoading(true)
    $api
      .post('/deposit', { amount: parseFloat(sum) })
      .then(({ data }) => {
        window.location.href = data.url
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
        if (err instanceof AxiosError) {
          toast.error(err.response?.data?.message || 'Ошибка пополнения')
          return
        }
        toast.error('Ошибка поплнения')
      })
  }

  return (
    <Main>
      <Title title="Пополнение баланса" />
      <DefaultHeader title={'Пополнение баланса'} subTitle={balanceText} />
      <div
        className={cva('flex gap-20 mt-10', {
          'animate-pulse pointer-events-none': loading,
        })}
      >
        <TopUpSidebar onSubmit={onSubmit} />
        <Card className={cva('flex-1 p-0 relative')}>
          {filtered.length > 0 ? (
            <TransactionsTable transactions={filtered} />
          ) : (
            <h2 className="text-base font-semibold text-teritary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              История пополнений пуста
            </h2>
          )}
        </Card>
      </div>
    </Main>
  )
}
