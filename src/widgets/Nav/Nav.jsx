import { memo } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../shared/ui/Button/Button'
import Add from '../../shared/icons/Add.svg'
import Home from '../../shared/icons/Add.svg'
import Help from '../../shared/icons/Add.svg'
import NavButton from './NavButton'
import { BottomNav } from '../BottomNav'

const links = [
  {
    href: '',
    text: 'Главная',
    icon: <Home />,
  },
  {
    href: '/top-up',
    text: 'Пополнить баланс',
    icon: <Add />,
  },
  {
    href: '/help',
    text: 'Поддержка',
    icon: <Help />,
  },
]

export default memo(function Nav() {
  return (
    <nav className="flex flex-col items-center pt-4 px-10">
      <div className="flex justify-between relative max-w-8xl w-full min-h-[42px] items-center border-b border-b-overlay pb-4">
        <Link to="/" className="text-lg text-secondary font-bold flex-1 museo-sans-cyrl">
          BuyCourses.uz
        </Link>

        <div
          className="flex gap-2 justify-center"
          style={{
            flex: '3 1 0%',
          }}
        >
          {links.map((elem, index) => (
            <NavButton key={index} {...elem} />
          ))}
        </div>

        <div className="flex items-center gap-4 flex-1 justify-end">
          <Link to="/login" className="text-sm text-secondary font-semibold">
            Войти
          </Link>
          <Button className={'border border-accent2 outline outline-1 -outline-offset-2 outline-accent3'} size={'sm'}>
            Регистрация
          </Button>
        </div>
      </div>
      <div className="h-[22px] mt-4 max-w-8xl w-full flex gap-8">
        <BottomNav />
      </div>
    </nav>
  )
})
