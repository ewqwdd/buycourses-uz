import { memo } from 'react'
import Left from '../../icons/Left.svg'
import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'
import { typings } from '../../lib/typings'

function Back({ className }) {
  return (
    <div className={cva('flex gap-2 items-center', className)}>
      <Left className="size-4" />
      <span className="text-sm text-secondary font-semibold">{typings.back}</span>
    </div>
  )
}

Back.propTypes = {
  className: PropTypes.string,
}

export default memo(Back)
