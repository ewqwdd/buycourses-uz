import { Link } from 'react-router-dom'
import Cart from '../../shared/icons/Cart.svg'

export default function CartLink() {
  return (
    <Link className={'size-[42px] flex justify-center items-center'} to={'/cart'}>
      <Cart className={'size-8 text-secondary'} />
    </Link>
  )
}
