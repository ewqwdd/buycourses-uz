import { memo } from 'react'
import { cva } from '../../shared/lib/cva'
import PropTypes from 'prop-types'

function AsideWrapper({ children, className }) {
  return (
    <aside className={cva('flex flex-col gap-10 w-full flex-1 max-w-[328px] sticky top-32 self-start', className)}>
      {children}
    </aside>
  )
}

AsideWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default memo(AsideWrapper)
