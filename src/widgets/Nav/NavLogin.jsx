import { useLocation } from 'react-router'
import useUserStore from '../../shared/store/useUserStore'
import { Button } from '../../shared/ui/Button'
import { Link } from 'react-router-dom'

export default function NavLogin() {
  const setUser = useUserStore((state) => state.setUser)
  const { pathname } = useLocation()

  const login = () => {
    setUser({
      email: 'skydisgusting@gmail.com',
    })
  }
  return (
    <div className="flex items-center gap-4 flex-1 justify-end">
      <button onClick={login} className="text-sm text-secondary font-semibold">
        Войти
      </button>
      <Button
        as={Link}
        to="/auth"
        state={{ prev: pathname }}
        className={'border border-accent2 outline outline-1 -outline-offset-2 outline-accent3'}
        size={'sm'}
      >
        Регистрация
      </Button>
    </div>
  )
}
