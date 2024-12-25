import { useLocation } from 'react-router'
import { Button } from '../../shared/ui/Button'
import { Link } from 'react-router-dom'

export default function NavLogin() {
  const { pathname } = useLocation()


  return (
    <div className="flex items-center gap-4 flex-1 justify-end">
      <Link to="/login" className="text-sm text-secondary font-semibold">
        Войти
      </Link>
      <Button
        as={Link}
        to="/register"
        state={{ prev: pathname }}
        className={'border border-accent2 outline outline-1 -outline-offset-2 outline-accent3'}
        size={'sm'}
      >
        Регистрация
      </Button>
    </div>
  )
}
