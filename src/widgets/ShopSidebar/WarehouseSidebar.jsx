import ShopSidebarSwitcher from './ShopSidebarSwitcher'
import { memo, useState } from 'react'
import { TopUpCard } from '../TopUpCard'
import { formatPrice } from '../../shared/lib/formatPrice'
import { formatCurrency } from '../../shared/lib/formatCurrecny'

export default memo(function WarehouseSidebar({ setSum }) {
  return (
    <aside
      className="flex flex-col gap-10 w-full flex-1 max-w-[328px] sticky top-32 self-start"
      key={'shop-sidebar-wrapper'}
    >
      <ShopSidebarSwitcher key={'shop-sidebar-switcher'} />
      <TopUpCard
        subTitle="Вывод произойдёт в течение 24х часов"
        afterInput={`Будет выведено 0,00 ${formatCurrency(0)}`}
        placeholder="Сумма для вывода"
        buttonText="Вывести"
        setSum={setSum}
        renderAfterInput={(value, ref) => {
          ref.textContent = `Будет выведено ${formatPrice(parseFloat(value || 0)).slice(0, -2)} ${formatCurrency(parseFloat(value))}`
        }}
      />
    </aside>
  )
})
