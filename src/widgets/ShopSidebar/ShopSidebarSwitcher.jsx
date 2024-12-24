import { Tool } from '../../shared/ui/Tool'
import Cart from '../../shared/icons/Cart.svg'
import Dropbox from '../../shared/icons/Dropbox.svg'
import { memo, useEffect } from 'react'
import { useLocation } from 'react-router'

export default memo(function ShopSidebarSwitcher() {
  const { pathname } = useLocation()

  const isWarehouse = pathname.includes('warehouse')

  useEffect(() => {
    if (isWarehouse) {
      sessionStorage.setItem('warehouse', pathname)
    } else {
      sessionStorage.setItem('home', pathname)
    }
  }, [pathname, isWarehouse])

  const shopLink = !isWarehouse ? '/' : (sessionStorage.getItem('home') ?? '/')
  const warehouseLink = isWarehouse ? '/warehouse' : (sessionStorage.getItem('warehouse') ?? '/warehouse')

  return (
    <div className="grid grid-cols-2 gap-1 p-1 w-full bg-background rounded-xl border border-foreground1">
      <Tool icon={<Cart />} to={shopLink} link label={'Магазин'} active={!isWarehouse} />
      <Tool icon={<Dropbox />} to={warehouseLink} link label={'Склад'} active={isWarehouse} />
    </div>
  )
})
