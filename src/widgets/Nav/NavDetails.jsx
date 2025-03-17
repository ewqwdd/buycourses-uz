import Logout from '../../shared/icons/Logout.svg'
import PropTypes from 'prop-types'
import useUserStore from '../../shared/store/useUserStore'
import { useNavigate } from 'react-router'
import CartLink from './CartLink'

export default function NavDetails({ user }) {
  const iconStyle = 'size-5 text-secondary'
  const buttonStyle = 'size-[42px] flex justify-center items-center'
  const logout = useUserStore((state) => state.logout)
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-2 flex-1 justify-end">
      <CartLink />
      <p className="text-sm font-semibold text-primary">{user?.email}</p>
      <button
        className={buttonStyle}
        onClick={() => {
          logout()
          navigate('/')
        }}
      >
        <Logout className={iconStyle} />
      </button>
    </div>
  )
}

NavDetails.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string.isRequired,
  }).isRequired,
}
