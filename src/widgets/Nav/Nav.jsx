import { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Add from '../../shared/icons/Add.svg'
import Home from '../../shared/icons/Add.svg'
import Help from '../../shared/icons/Add.svg'
import NavButton from './NavButton'
import { BottomNav } from '../BottomNav'
import { noNavPages } from '../../shared/routerConfig'
import useUserStore from '../../shared/store/useUserStore'
import NavLogin from './NavLogin'
import NavDetails from './NavDetails'

const links = [
  {
    href: '',
    text: 'Главная',
    icon: <Home />,
    id: 0,
  },
  {
    href: '/top-up',
    text: 'Пополнить баланс',
    icon: <Add />,
    id: 1,
  },
  {
    href: '/help',
    text: 'Поддержка',
    icon: <Help />,
    id: 2,
  },
]

export default memo(function Nav() {
  const { pathname } = useLocation()
  const user = useUserStore(state => state.user)
  const isMounted = useUserStore(state => state.isMounted)

  if (noNavPages.find((elem) => pathname.includes(elem))) return null

  const active = [...links].reverse().find(e => pathname.includes(e.href))

  const navRight = user ? <NavDetails user={user} /> : <NavLogin />

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
            <NavButton active={active.id === elem.id} key={index} {...elem} />
          ))}
        </div>
          {isMounted ? navRight: <div className='flex-1' />}
      </div>
      <div className="h-[22px] mt-4 max-w-8xl w-full flex gap-8">
        <BottomNav />
      </div>
    </nav>
  )
})
