import { memo, useRef, useState } from 'react'
import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

function TextAreaResize({ className, value, setValue, onChange, onFocus, onBlur, ...props }) {
  const ref = useRef(null)
  const [placeholder, setPlaceholder] = useState(true)

  const handleChange = (e) => {
    setValue?.(e.target.value)
    onChange?.(e)
  }

  const handleInput = (e) => {
    setValue?.(e.target.textContent)
  }

  return (
    <div className={cva('relative flex flex-col', className)}>
      <span
        value={value}
        onChange={handleChange}
        onInput={handleInput}
        ref={ref}
        className={cva(
          'bg-transparent min-h-full text-sm text-primary font-medium focus:border-none focus:outline-none outline-none border-none relative'
        )}
        {...props}
        contentEditable
      />
      <p
        className={cva(
          'text-secondary transition-all duration-100 text-sm font-medium absolute top-0 left-0 pointer-events-none select-none',
          {
            'opacity-0': value.length !== 0,
          }
        )}
      >
        {props.placeholder}
      </p>
    </div>
  )
}

TextAreaResize.propTypes = {
  className: PropTypes.string,
}

export default memo(TextAreaResize)
