import { memo } from 'react'
import { cva } from '../../shared/lib/cva'
import PropTypes from 'prop-types'

function Main({ children, className, ...props }) {
  return (
    <main className={cva('bg max-w-9xl w-full mx-auto mt-12 px-10', className)} {...props}>
      {children}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.object,
}

export default memo(Main)