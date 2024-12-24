import SunFill from '../../shared/icons/SunFill.svg'
import Logout from '../../shared/icons/Logout.svg'
import PropTypes from 'prop-types'
import useUserStore from '../../shared/store/useUserStore'
import { useToggleTheme } from '../ThemeProvider'
import { useNavigate } from 'react-router'

export default function NavDetails({ user }) {
  const iconStyle = 'size-5 text-secondary'
  const buttonStyle = 'size-[42px] flex justify-center items-center'
  const logout = useUserStore(state => state.logout)
  const switchTheme = useToggleTheme()
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-2 flex-1 justify-end">
      <button className={buttonStyle} onClick={switchTheme}>
        <SunFill className={iconStyle} />
      </button>
      <p className="text-sm font-semibold text-primary">{user?.email}</p>
      <button className={buttonStyle} onClick={() => {
        logout()
        navigate('/')
      }}>
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
