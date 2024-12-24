import { Card } from '../../shared/ui/Card'
import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { TopUpSidebar } from '../../widgets/TopUpSidebar'

export default function TopUp() {
  return (
    <Main>
      <Title title="Пополнение баланса" />
      <DefaultHeader title={'Пополнение баланса'} subTitle={'Баланс 17,43 рубля'} />
      <div className="flex gap-20 mt-10">
        <TopUpSidebar />
        <Card className="gap-3 flex-1 justify-center items-center">
          <h2 className="text-base font-semibold text-teritary">История пополнений пуста</h2>
        </Card>
      </div>
    </Main>
  )
}
