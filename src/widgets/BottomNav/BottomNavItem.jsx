import { NavLink } from 'react-router-dom'
import { cva } from '../../shared/lib/cva'
import PropTypes from 'prop-types'

export default function BottomNavItem({ icon, label, to, active }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cva('flex gap-2 text-secondary font-semibold text-sm [&_svg]:size-4 [&_svg]:hidden items-center', {
          '[&_svg]:block [&_svg]:text-primary  text-primary':
            typeof active === 'boolean' ? active : isActive,
        })
      }
    >
      {icon}
      {label}
    </NavLink>
  )
}

BottomNavItem.propTypes = {
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
}
