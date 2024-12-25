import { useNavigate } from 'react-router'
import useUserStore from '../../shared/store/useUserStore'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

export default function AuthRequired({ children }) {
  const user = useUserStore((state) => state.user)
  const isMounted = useUserStore((state) => state.isMounted)
  const navigate = useNavigate()


  useEffect(() => {
    if (isMounted && !user) {
      navigate('/login')
    }
  }, [isMounted, user])

  if (user && isMounted) return children

  return null
}

AuthRequired.propTypes = {
  children: PropTypes.node.isRequired,
}
