import { cva } from '../../shared/lib/cva'
import PropTypes from 'prop-types'

export default function Row({ values, heading }) {
  const text = cva('text-sm font-medium text-primary px-5 h-50 flex items-center min-w-[120px]', {
    'text-secondary': heading,
    'border-t-foreground1 border-t': !heading,
  })
  return (
    <>
      <span className={text}>{values[0]}</span>
      <span className={text}>{values[1]}</span>
      <div className={cva(text, 'justify-end')}>{values[2]}</div>
      <span className={cva(text, 'justify-end')}>{values[3]}</span>
    </>
  )
}

Row.propTypes = {
  values: PropTypes.array.isRequired,
  heading: PropTypes.bool,
}
