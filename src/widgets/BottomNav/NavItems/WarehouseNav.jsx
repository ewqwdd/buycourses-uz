import BottomNavItem from '../BottomNavItem'
import Undo from '../../../shared/icons/Undo.svg'
import EarthGlobe from '../../../shared/icons/EarthGlobe.svg'
import { useLocation } from 'react-router'
import Balance from '../Balance/Balance'
import { typings } from '../../../shared/lib/typings'

export default function WarehouseNav() {
  const { pathname } = useLocation()
  return (
    <>
      <BottomNavItem to="/warehouse" icon={<Undo />} label={typings.purchases} active={pathname === '/warehouse'} />
      <BottomNavItem to="/warehouse/withdraw" icon={<EarthGlobe />} label={typings.withdraw} />
      <Balance />
    </>
  )
}
