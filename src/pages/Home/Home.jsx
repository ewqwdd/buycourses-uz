import { Link } from 'react-router-dom'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ShopSidebar } from '../../widgets/ShopSidebar'
import { Category, CategorySkeleton } from '../../widgets/Category'
import { useCategories } from '../../shared/hooks/useCategories'
import { ListWrapper } from '../../shared/ui/ListWrapper'

export default function Home() {
  const { data, isLoading } = useCategories()

  return (
    <Main>
      <DefaultHeader title={'Магазин'} subTitle={'2 товара'} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <ListWrapper>
          {isLoading && new Array(6).fill().map((_, i) => <CategorySkeleton key={i} />)}
          {data.map((item) => (
            <Category as={Link} to={`/${item.slug}`} key={item.id} {...item} />
          ))}
        </ListWrapper>
      </div>
    </Main>
  )
}
