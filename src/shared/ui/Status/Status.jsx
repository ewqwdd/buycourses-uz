import CheckMark from '../../icons/Checkmark.svg'
import Closed from '../../icons/Closed.svg'
import History from '../../icons/History.svg'
import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

export default function Status({ status }) {
  const base = 'rounded-lg min-h-6 px-2 flex gap-2 items-center [&_svg]:size-4'
  switch (status) {
    case 'decline':
      return (
        <div className={cva(base, 'bg-error/20 text-error [&_svg]:text-error')}>
          <Closed />
          Отклонено
        </div>
      )
    case 'success':
      return (
        <div className={cva(base, 'bg-success/20 text-success [&_svg]:text-success')}>
          <CheckMark />
          Выплачено
        </div>
      )
    case 'pending':
      return (
        <div className={cva(base, 'bg-secondary/20 text-secondary [&_svg]:text-secondary')}>
          <History />
          Выплачено
        </div>
      )
    default:
      return null
  }
}

Status.propTypes = {
  status: PropTypes.oneOf(['decline', 'success', 'pending']),
}
