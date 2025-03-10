import ShopSidebarSwitcher from './ShopSidebarSwitcher'
import { memo } from 'react'
import { TopUpCard } from '../TopUpCard'
import { formatPrice } from '../../shared/lib/formatPrice'
import { formatCurrency } from '../../shared/lib/formatCurrecny'
import { typings } from '../../shared/lib/typings'

export default memo(function WarehouseSidebar({ setSum }) {
  return (
    <aside
      className="flex flex-col gap-10 w-full flex-1 max-w-[328px] sticky top-32 self-start"
      key={'shop-sidebar-wrapper'}
    >
      <ShopSidebarSwitcher key={'shop-sidebar-switcher'} />
      <TopUpCard
        subTitle={typings.withdrawIn24}
        afterInput={`${typings.amountToWithdraw} ${formatCurrency(0)}`}
        placeholder={typings.withdrawPlaceholder}
        buttonText={typings.withdraw}
        setSum={setSum}
        renderAfterInput={(value, ref) => {
          ref.textContent = `${typings.withdrawAfterInput} ${formatPrice(parseFloat(value || 0))}`
        }}
      />
    </aside>
  )
})
