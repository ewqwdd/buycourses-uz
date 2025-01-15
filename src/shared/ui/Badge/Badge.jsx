import { memo } from 'react'
import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

function Badge({ className, as, variant = 'primary', children, ...props }) {
  const variants = {
    primary: 'bg-accent text-primary border-accent2 outline-accent3',
    secondary: 'bg-accentSecondary border-accentSecondary text-black outline-black/80',
    neutral: 'bg-overlay text-primary border-background outline-overlay',
  }
  const Cmp = as || 'div'

  return (
    <Cmp
      className={cva(
        'flex gap-2 items-center justify-center text-sm font-semibold min-h-7 px-2 rounded-lg border outline outline-1 -outline-offset-2',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Cmp>
  )
}

Badge.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
}

export default memo(Badge)
