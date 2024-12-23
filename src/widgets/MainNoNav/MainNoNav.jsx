import { useLocation } from 'react-router'
import { cva } from '../../shared/lib/cva'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Back from '../../shared/ui/Back/Back'

export default function MainNoNav({ children, className, ...props }) {
  const { state } = useLocation()
  const prev = state?.prev || '/'

  const back = (
    <Link to={prev} className="self-start">
      <Back className="h-[42px]" />
    </Link>
  )

  return (
    <main className={cva('bg no-nav p-6 flex flex-col', className)} {...props}>
      {back}
      {children}
    </main>
  )
}

MainNoNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  props: PropTypes.object,
}
