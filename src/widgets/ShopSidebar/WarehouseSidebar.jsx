import ShopSidebarSwitcher from './ShopSidebarSwitcher'
import { memo } from 'react'
import { TopUpCard } from '../TopUpCard'

export default memo(function WarehouseSidebar() {
  return (
    <aside
      className="flex flex-col gap-10 w-full flex-1 max-w-[328px] sticky top-32 self-start"
      key={'shop-sidebar-wrapper'}
    >
      <ShopSidebarSwitcher key={'shop-sidebar-switcher'} />
      <TopUpCard subTitle="Вывод произойдёт в течение 24х часов" afterInput="Будет выведено 17,43 рубля" />
    </aside>
  )
})
