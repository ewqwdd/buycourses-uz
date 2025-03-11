import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

export default function SquareAvatar({ src, alt, className, ...props }) {
  const cls = cva('rounded-xl overflow-hidden bg-foreground1 border border-overlay size-14', className)

  if (src) {
    return <img src={src} alt={alt ?? 'avatar'} className={cls} {...props} />
  }

  return <div className={cls} />
}

SquareAvatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.object,
}
