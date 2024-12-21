import { Link } from 'react-router-dom'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import { ShopSidebar } from '../../widgets/ShopSidebar'
import Product from '../../widgets/Product/Product'

const items = [
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
  {
    name: 'Воронка продаж 4.0 (Продвинутая версия)',
    category: 'Программы и скрипты',
    slug: 'apps-scripts',
  },
]

export default function Home() {
  return (
    <Main>
      <DefaultHeader title={'Магазин'} subTitle={'2 товара'} />
      <div className="flex gap-20 mt-10">
        <ShopSidebar />
        <div className="grid grid-cols-2 flex-1 gap-3">
          {items.map((item, index) => (
            <Product as={Link} to={`/${item.slug}`} key={index} {...item} />
          ))}
        </div>
      </div>
    </Main>
  )
}
