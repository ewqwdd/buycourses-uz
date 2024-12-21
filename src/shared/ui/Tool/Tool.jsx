import { cloneElement, memo } from 'react'
import { Link } from 'react-router-dom'
import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

function Tool({ icon, label, to, className, disabled, active, link, ...props }) {
  const defaultStyles =
    'rounded-xl justify-center px-4 py-[10px] flex items-center gap-2 text-primary font-semibold text-sm box-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-600 custom-transition'
  const content = (
    <>
      <div className="bg-foreground1 text-secondary rounded-full">{cloneElement(icon, { className: 'size-10' })}</div>
      <span className="text-secondary text-sm font-medium capitalize">{label}</span>
    </>
  )
  if (link) {
    return (
      <Link
        to={disabled ? '' : to}
        className={cva(
          defaultStyles,
          'duration-200 flex-col py-5 px-0',
          {
            'bg-foreground1': active,
            'pointer-events-none': !!disabled,
          },
          className
        )}
        {...props}
      >
        {content}
      </Link>
    )
  }
  return (
    <button
      className={cva(
        defaultStyles,
        'duration-200 flex-col py-5 hover:bg-foreground1 px-0',
        { 'bg-foreground1': !!active, 'pointer-events-none': !!disabled },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  )
}

Tool.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  link: PropTypes.bool,
}

export default memo(Tool)
