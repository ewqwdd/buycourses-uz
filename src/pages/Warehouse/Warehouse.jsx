import { Link } from 'react-router-dom'
import useUserStore from '../../shared/store/useUserStore'
import { Card } from '../../shared/ui/Card'
import { ListWrapper } from '../../shared/ui/ListWrapper'
import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { Product } from '../../widgets/Product'
import { ShopSidebar } from '../../widgets/ShopSidebar'
import { useCategories } from '../../shared/hooks/useCategories'
import { typings } from '../../shared/lib/typings'

export default function Warehouse() {
  const purchasedItems = useUserStore((state) => state.purchasedProducts) ?? []
  const { data: categories } = useCategories()

  let content
  const hasItems = purchasedItems.length > 0

  if (!hasItems) {
    content = (
      <Card className="gap-3 min-h-[442px] flex-1 justify-center items-center">
        <h2 className="text-base font-semibold text-teritary">{typings.yourPurchases}</h2>
      </Card>
    )
  } else {
    content = (
      <ListWrapper>
        {purchasedItems.map((item) => (
          <Product
            key={item.id}
            {...item}
            category={categories?.find((e) => e.id === item.categoryId)?.name}
            as={Link}
            state={{ from: '/warehouse' }}
            to={`/product/${item.slug}`}
          />
        ))}
      </ListWrapper>
    )
  }

  return (
    <Main>
      <Title title={typings.purchases} />
      <DefaultHeader title={typings.myPurchases} subTitle={typings.empty} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        {content}
      </div>
    </Main>
  )
}
