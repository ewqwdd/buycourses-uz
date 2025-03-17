import PropTypes from 'prop-types'
import { useState } from 'react'
import { formatPrice } from '../../../shared/lib/formatPrice'
import { cva } from '../../../shared/lib/cva'
import Quantity from './Quantity'
import DeleteFromBasker from './DeleteFromBasker'

export default function CartItem({ name, image, amount, id, price }) {
  const picStyles = 'rounded-md  bg-foreground1 size-16 object-cover'
  const [loading, setLoading] = useState()

  const textStyles = 'text-sm whitespace-nowrap'

  return (
    <tr
      className={cva({
        'animate-pulse pointer-events-none': loading,
      })}
    >
      <th className={textStyles}>
        <div className={'flex gap-4 items-center'}>
          <DeleteFromBasker id={id} setLoading={setLoading} />
          {image ? <img src={image} alt="product preview" className={picStyles} /> : <div className={picStyles} />}
          <p className="text-primary text-base font-medium max-w-full overflow-ellipsis">{name}</p>
        </div>
      </th>
      <th className={textStyles}>
        <div className="flex items-center">
          <p className="text-secondary">{formatPrice(price)}</p>
        </div>
      </th>
      <th className={textStyles}>
        <Quantity id={id} amount={amount} setLoading={setLoading} />
      </th>
      <th className={textStyles}>
        <div className="flex items-center">
          <p className="text-secondary">{formatPrice(price * amount)}</p>
        </div>
      </th>
    </tr>
  )
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  amount: PropTypes.number,
  price: PropTypes.number,
  id: PropTypes.number,
}
