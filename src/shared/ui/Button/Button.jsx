import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

export default function Button({ className, as, variant = 'primary', size = 'md', ...props }) {
  const variants = {
    primary: 'bg-accent text-primary',
    secondary: 'bg-accentSecondary text-black',
    neutral: 'bg-overlay text-primary',
  }
  const sizes = {
    sm: 'min-h-7 px-2 rounded-lg',
    md: 'min-h-[42px] px-4 rounded-xl',
  }

  const Cmp = as || 'button'

  return (
    <Cmp
      className={cva(
        'flex gap-2 items-center justify-center text-sm font-semibold disabled:opacity-50',
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    />
  )
}

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary']),
  size: PropTypes.oneOf(['sm', 'md']),
  as: PropTypes.elementType,
}
