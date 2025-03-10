import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

export default function TextArea({ className, ...props }) {
  return (
    <textarea
      className={cva(
        'bg-transparent text-sm text-primary font-medium placeholder:text-secondary focus:border-none focus:outline-none outline-none border-none',
        className
      )}
      {...props}
    />
  )
}

TextArea.propTypes = {
  className: PropTypes.string,
}
