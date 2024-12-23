import { Link, useLocation } from 'react-router-dom'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ShopSidebar } from '../../widgets/ShopSidebar'
import Back from '../../shared/ui/Back/Back'
import { Product } from '../../widgets/Product'

const items = [
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'sales-funnel',
  },
]

const subTitle = (
  <Link to="/">
    <Back />
  </Link>
)

export default function Category() {
  const { pathname } = useLocation()
  return (
    <Main>
      <DefaultHeader title={'Воронка продаж 4.0 (Продвинутая версия)'} subTitle={subTitle} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <div className="grid grid-cols-2 flex-1 gap-3 self-start">
          {items.map((item, index) => (
            <Product key={index} {...item} as={Link} to={pathname + '/' + item.slug} />
          ))}
        </div>
      </div>
    </Main>
  )
}
