import { Card } from '../../shared/ui/Card'
import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { OfferSidebar } from '../../widgets/OffersSidebar'

export default function MyOffers() {
  return (
    <Main>
      <Title title="Мои обьявления" />
      <DefaultHeader title={'Объявление'} subTitle={'0 товаров'} />
      <div className="flex gap-20 mt-10">
        <OfferSidebar />
        <Card className="min-h-[482px] flex-1 justify-center items-center">
          <h2 className="text-base font-semibold text-teritary">У вас нет обьявлений</h2>
        </Card>
      </div>
    </Main>
  )
}
