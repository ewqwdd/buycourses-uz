import { memo } from 'react'
import Left from '../../icons/Left.svg'
import { cva } from '../../lib/cva'
import PropTypes from 'prop-types'

function Back({ className }) {
  return (
    <div className={cva('flex gap-2 items-center', className)}>
      <Left className="size-4" />
      <span className="text-sm text-secondary font-semibold">Назад</span>
    </div>
  )
}

Back.propTypes = {
  className: PropTypes.string,
}

export default memo(Back)
