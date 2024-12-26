import BottomNavItem from '../BottomNavItem'
import Undo from '../../../shared/icons/Undo.svg'
import EarthGlobe from '../../../shared/icons/EarthGlobe.svg'
import { useLocation } from 'react-router'

export default function MainNav() {
  const { pathname } = useLocation()
  const isMyOffers = ['/my-offers', '/create'].includes(pathname)
  console.log(pathname, isMyOffers)
  return (
    <>
      <BottomNavItem to="/" icon={<Undo />} label="Все обьявления" active={!isMyOffers} />
      <BottomNavItem to="/my-offers" icon={<EarthGlobe />} label="Мои обьявления" active={isMyOffers} />
    </>
  )
}
