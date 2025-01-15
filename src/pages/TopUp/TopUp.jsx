import { useMemo, useState } from 'react'
import { formatCurrency } from '../../shared/lib/formatCurrecny'
import { formatPrice } from '../../shared/lib/formatPrice'
import useUserStore from '../../shared/store/useUserStore'
import { Card } from '../../shared/ui/Card'
import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { TopUpSidebar } from '../../widgets/TopUpSidebar'
import Back from '../../shared/ui/Back/Back'
import { Button } from '../../shared/ui/Button'
import TransactionsTable from './TransactionsTable'
import Deposit from './Deposit'

export default function TopUp() {
  const balance = useUserStore((state) => state.user?.balance) ?? 0
  const [sum, setSum] = useState(0)
  const transactions = useUserStore(state => state.transactions) ?? []
  const filtered = useMemo(() => transactions.filter(e => e.type === 'deposit'))

  const backButton = (
    <button onClick={() => setSum(0)}>
      <Back />
    </button>
  )
  const balanceText = `Баланс ${formatPrice(balance).slice(0, -2)} ${formatCurrency(balance)}`

  const defaultContent = (
    <>
      <TopUpSidebar setSum={setSum} />
      <Card className="flex-1 p-0 relative">
        {filtered.length > 0 ? <TransactionsTable transactions={filtered} /> : <h2 className="text-base font-semibold text-teritary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">История пополнений пуста</h2>}
      </Card>
    </>
  )

  const topUpContent = <Deposit sum={sum} setSum={setSum} />

  return (
    <Main>
      <Title title="Пополнение баланса" />
      <DefaultHeader title={'Пополнение баланса'} subTitle={sum > 0 ? backButton : balanceText} />
      <div className="flex gap-20 mt-10">{sum > 0 ? topUpContent :  defaultContent}</div>
    </Main>
  )
}
