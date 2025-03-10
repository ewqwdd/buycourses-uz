import { Link, Navigate, useLocation, useParams } from 'react-router-dom'
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
import { useCategories } from '../../shared/hooks/useCategories'
import { ListWrapper } from '../../shared/ui/ListWrapper'

const LIMIT = 6

const fetchCategory = async ({ pageParam = 0, queryKey }) => {
  try {
    const { data } = await $api.get(`/categories/${queryKey[1]}?limit=${LIMIT}&page=${pageParam}`)
    return {
      items: data.items || [],
      nextCursor: data.items.length > 0 ? pageParam + 1 : null,
    }
  } catch (error) {
    console.error('Error while loading categories:', error)
    return { items: [], nextCursor: null }
  }
}

const subTitle = (
  <Link to="/">
    <Back />
  </Link>
)

export default function Category() {
  const { pathname } = useLocation()
  const { ref, inView } = useInView({ rootMargin: '100px' })
  const { slug } = useParams()
  const { data: categories, isFetching: categoryLoading } = useCategories()
  const { data, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: ['category', slug],
    queryFn: fetchCategory,
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

  const category = categories.find((category) => category.slug === slug)

  if (!category && !categoryLoading) {
    return <Navigate to="/" />
  }

  return (
    <Main>
      <Title title={category?.name} />
      <DefaultHeader title={category?.name} subTitle={subTitle} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <ListWrapper>
          {(isLoading || categoryLoading) && new Array(6).fill().map((_, i) => <ProductSkeleton key={i} />)}
          {data?.pages
            ?.flatMap((page) => page.items)
            .map((item, index) => (
              <Product key={index} {...item} category={category?.name} as={Link} to={pathname + '/' + item.slug} />
            ))}
          <div ref={ref} className="col-span-2 h-20" />
        </ListWrapper>
      </div>
    </Main>
  )
}
