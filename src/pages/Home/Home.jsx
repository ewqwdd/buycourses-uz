import { Link } from 'react-router-dom'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ShopSidebar } from '../../widgets/ShopSidebar'
import { ListWrapper } from '../../shared/ui/ListWrapper'
import { typings } from '../../shared/lib/typings'
import { useProducts } from '../../shared/hooks/useProducts'
import { Product, ProductSkeleton } from '../../widgets/Product'

export default function Home() {
  const { data, isFetching } = useProducts()

  return (
    <Main>
      <DefaultHeader title={typings.shop} subTitle={data?.length + ' ' + typings.products} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <ListWrapper>
          {isFetching && new Array(6).fill().map((_, i) => <ProductSkeleton key={i} />)}
          {data?.map((item, index) => (
            <Product key={index} {...item} category={typings.tea} as={Link} to={'/' + item.slug} />
          ))}
        </ListWrapper>
      </div>
    </Main>
  )
}
