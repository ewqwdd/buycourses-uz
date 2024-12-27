import { useState } from 'react'
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

export default function TopUp() {
  const balance = useUserStore((state) => state.user?.balance) ?? 0
  const [sum, setSum] = useState(0)

  const backButton = (
    <button onClick={() => setSum(0)}>
      <Back />
    </button>
  )
  const balanceText = `Баланс ${formatPrice(balance)} ${formatCurrency(balance)}`

  const defaultContent = (
    <>
      <TopUpSidebar setSum={setSum} />
      <Card className="gap-3 flex-1 justify-center items-center">
        <h2 className="text-base font-semibold text-teritary">История пополнений пуста</h2>
      </Card>
    </>
  )

  const topUpContent = (
    <Card className="min-h-[482px] items-center justify-center gap-4 flex-1">
      <p className="text-teritary text-base font-semibold text-center">
        Переведите {sum} рублей на карту {import.meta.env.VITE_CARD_NUMBER} <br />и нажмите накнопку “Я оплатил”
      </p>
      <Button size="sm">Я оплатил</Button>
    </Card>
  )

  return (
    <Main>
      <Title title="Пополнение баланса" />
      <DefaultHeader title={'Пополнение баланса'} subTitle={sum > 0 ? backButton : balanceText} />
      <div className="flex gap-20 mt-10">{sum > 0 ? topUpContent :  defaultContent}</div>
    </Main>
  )
}
