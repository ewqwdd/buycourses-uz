import { memo } from 'react'
import { cva } from '../../shared/lib/cva'
import PropTypes from 'prop-types'

function DefaultHeader({ title, subTitle, className, ...props }) {
  return (
    <div className={cva('flex flex-col gap-2 sticky top-4', className)} {...props}>
      <span className="text-sm font-medium text-primary/60">{subTitle}</span>
      <h1 className="text-4xl font-semibold">{title}&nbsp;</h1>
    </div>
  )
}

DefaultHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  className: PropTypes.string,
  props: PropTypes.object,
}

export default memo(DefaultHeader)
