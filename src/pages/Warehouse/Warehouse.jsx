import { Card } from '../../shared/ui/Card'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ShopSidebar } from '../../widgets/ShopSidebar'


export default function Warehouse() {
  return (
    <Main>
      <DefaultHeader title={'Склад'} subTitle={'Пусто'} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <Card className="gap-3 min-h-[442px] flex-1 justify-center items-center">
            <h2 className='text-base font-semibold text-teritary'>
                Здесь появятся ваши покупки
            </h2>
        </Card>
      </div>
    </Main>
  )
}
