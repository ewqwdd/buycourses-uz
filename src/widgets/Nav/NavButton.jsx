import { NavLink } from 'react-router-dom'
import { cva } from '../../shared/lib/cva'
import PropTypes from 'prop-types'

export default function NavButton({ href, text, icon, ...props }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cva('flex items-center rounded-xl gap-2 text-sm text-secondary font-semibold min-h-[42px] px-4', {
          'text-primary bg-overlay': isActive,
        })
      }
      activeClassName="text-accent"
      {...props}
    >
      {icon}
      {text}
    </NavLink>
  )
}

NavButton.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.node,
}
