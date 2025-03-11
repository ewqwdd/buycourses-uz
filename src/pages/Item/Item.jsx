import { Navigate, useLocation } from 'react-router'
import { Card } from '../../shared/ui/Card'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ShopSidebar } from '../../widgets/ShopSidebar'
import { Link } from 'react-router-dom'
import Back from '../../shared/ui/Back/Back'
import { Title } from '../../shared/ui/Title'
import { useQuery } from '@tanstack/react-query'
import ItemContent from './ItemContent'
import $api from '../../shared/lib/$api'
import { cva } from '../../shared/lib/cva'
import { useAdmin } from '../../shared/hooks/useAdmin'
import DeleteItem from './DeleteItem'

const fetchProduct = async ({ queryKey }) => {
  try {
    const { data } = await $api.get(`/products/${queryKey[1]}`)
    return data
  } catch (error) {
    console.error('Error while loading category:', error)
    return { items: [], nextCursor: null }
  }
}

export default function Item() {
  const { pathname, state } = useLocation()
  const splitted = pathname.split('/')
  const slug = splitted[splitted.length - 1]
  const categorySlug = splitted[splitted.length - 2]
  const from = state?.from
  const admin = useAdmin()

  const { data, isFetching } = useQuery({
    queryKey: ['product', slug],
    queryFn: fetchProduct,
    staleTime: 5 * 60 * 1000,
    // initialData: null,
  })

  const back = (
    <Link to={from ?? '/' + categorySlug}>
      <Back />
    </Link>
  )

  const loading = isFetching
  if (!data && !loading) {
    return <Navigate to="/" />
  }

  const title = admin ? (
    <div className="flex items-end gap-8">
      {data?.name}
      <DeleteItem id={data?.id} slug={categorySlug} />
    </div>
  ) : (
    data?.name
  )

  return (
    <Main>
      {data && <Title title={data?.name} />}
      <DefaultHeader title={title} subTitle={back} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <Card
          className={cva('flex-1 justify-center p-10 gap-2 items-start self-start', {
            'animate-pulse min-h-72': loading,
          })}
        >
          {!loading && <ItemContent data={data} />}
        </Card>
      </div>
    </Main>
  )
}
