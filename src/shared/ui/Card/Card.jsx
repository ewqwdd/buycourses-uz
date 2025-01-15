import { memo } from 'react'
import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

function Card({ children, className, ...props }) {
  return (
    <div className={cva('bg-background rounded-xl p-8 border border-foreground1 flex flex-col', className)} {...props}>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.object,
}

export default memo(Card)