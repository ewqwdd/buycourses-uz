import { Link } from 'react-router-dom'
import Cart from '../../shared/icons/Cart.svg'

export default function CartLink() {
  return (
    <Link className={'h-[42px] flex justify-center items-center mr-4 text-sm'} to={'/cart'}>
      Cart
      <Cart className={'size-8 text-secondary'} />
    </Link>
  )
}
