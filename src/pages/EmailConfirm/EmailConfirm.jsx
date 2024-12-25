import { useNavigate, useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import $api from '../../lib/$api'
import useUserStore from '../../shared/store/useUserStore'

export default function EmailConfirm() {
  const [searchParams, setSearchParams] = useSearchParams()
  const setUser = useUserStore((state) => state.setUser)
  const user = useUserStore((state) => state.user)
  const isMounted = useUserStore((state) => state.isMounted)
  const navigate = useNavigate()

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const hash = searchParams.get('hash')
        if (hash) {
          await $api.get(`/auth?hash=${hash}`)
          const { data } = await $api.get('/me')
          setUser(data)
        }
      } catch (e) {
        console.error(e)
      }
    }
    confirmEmail()
  }, [searchParams])

  useEffect(() => {
    if (user) {
      setSearchParams({ delete: ['hash'] })
      navigate('/warehouse')
    } else if (!searchParams.has('hash') && isMounted) {
      navigate('/')
    }
  }, [user, searchParams, isMounted])

  return <main className={'bg no-nav p-6'} />
}
