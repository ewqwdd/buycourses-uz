import { Link } from 'react-router-dom'
import { useCategories } from '../../shared/hooks/useCategories'
import useUserStore from '../../shared/store/useUserStore'
import { Card } from '../../shared/ui/Card'
import { ListWrapper } from '../../shared/ui/ListWrapper'
import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { OfferSidebar } from '../../widgets/OffersSidebar'
import { Product } from '../../widgets/Product'

export default function MyOffers() {
  const products = useUserStore((state) => state.products) ?? []
  const { data: categories } = useCategories()

  let content
  const hasItems = products.length > 0

  if (!hasItems) {
    content = (
      <Card className="min-h-[482px] flex-1 justify-center items-center">
        <h2 className="text-base font-semibold text-teritary">У вас нет обьявлений</h2>
      </Card>
    )
  } else {
    content = (
      <ListWrapper>
        {products.map((item) => (
          <Product
            key={item.id}
            {...item}
            category={categories?.find((e) => e.id === item.categoryId)?.name}
            as={Link}
            state={{ from: '/my-offers' }}
            to={`/product/${item.slug}`}
          />
        ))}
      </ListWrapper>
    )
  }
  return (
    <Main>
      <Title title="Мои обьявления" />
      <DefaultHeader title={'Объявление'} subTitle={'0 товаров'} />
      <div className="flex gap-20 mt-10">
        <OfferSidebar />
        {content}
      </div>
    </Main>
  )
}
