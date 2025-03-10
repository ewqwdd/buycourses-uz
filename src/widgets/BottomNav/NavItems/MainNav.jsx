import BottomNavItem from '../BottomNavItem'
import Undo from '../../../shared/icons/Undo.svg'
import EarthGlobe from '../../../shared/icons/EarthGlobe.svg'
import { useLocation } from 'react-router'
import { typings } from '../../../shared/lib/typings'

export default function MainNav() {
  const { pathname } = useLocation()
  const isMyOffers = ['/my-offers', '/create'].includes(pathname)
  return (
    <>
      <BottomNavItem to="/" icon={<Undo />} label={typings.allProducts} active={!isMyOffers} />
      <BottomNavItem to="/my-offers" icon={<EarthGlobe />} label={typings.myProducts} active={isMyOffers} />
    </>
  )
}
