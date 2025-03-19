import { Link, useLocation } from 'react-router-dom'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ShopSidebar } from '../../widgets/ShopSidebar'
import Back from '../../shared/ui/Back/Back'
import { Product, ProductSkeleton } from '../../widgets/Product'
import { Title } from '../../shared/ui/Title'
import $api from '../../shared/lib/$api'
import { useInView } from 'react-intersection-observer'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { ListWrapper } from '../../shared/ui/ListWrapper'
import { typings } from '../../shared/lib/typings'

const LIMIT = 12

const fetchProducts = async ({ pageParam = 0 }) => {
  try {
    const { data } = await $api.get(`/products?limit=${LIMIT}&page=${pageParam}`)
    return {
      items: data.items || [],
      nextCursor: data.items.length > 0 ? pageParam + 1 : null,
    }
  } catch (error) {
    console.error('Error while loading products:', error)
    return { items: [], nextCursor: null }
  }
}

const subTitle = (
  <Link to="/">
    <Back />
  </Link>
)

export default function Products() {
  const { pathname } = useLocation()
  const { ref, inView } = useInView({ rootMargin: '100px' })
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['category'],
    queryFn: fetchProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.nextCursor ?? null,
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
  })

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  const title = typings.products

  return (
    <Main>
      <Title title={title} />
      <DefaultHeader title={title} subTitle={subTitle} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <ListWrapper>
          {isLoading && new Array(6).fill().map((_, i) => <ProductSkeleton key={i} />)}
          {data?.pages
            ?.flatMap((page) => page.items)
            .map((item, index) => (
              <Product key={index} {...item} category={typings.tea} as={Link} to={pathname + '/' + item.slug} />
            ))}
          <div ref={ref} className="col-span-4 h-20 mt-10" />
        </ListWrapper>
      </div>
    </Main>
  )
}
