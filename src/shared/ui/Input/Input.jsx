import { forwardRef } from 'react'
import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

function Input({ className, right, ...props }, ref) {
  return (
    <div className="relative">
      <input
        ref={ref}
        className={cva(
          'bg-overlay rounded-xl placeholder:text-teritary font-medium text-base min-h-[42px] px-4 w-full border border-transparent transition-all ring-0 ring-accent/20 outline-none',
          'focus:border-accent focus:ring-[3px] focus:outline-none',
          {
            'pr-14': !!right,
          },
          className
        )}
        {...props}
      />
      {right && <div className="absolute right-4 top-1/2 transform -translate-y-1/2">{right}</div>}
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  right: PropTypes.node,
}

export default forwardRef(Input)