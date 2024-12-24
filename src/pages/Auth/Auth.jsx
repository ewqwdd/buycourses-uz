import { cva } from '../../shared/lib/cva'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'
import SquareAvatar from '../../shared/ui/SquareAvatar/SquareAvatar'
import { MainNoNav } from '../../widgets/MainNoNav'
import Right from '../../shared/icons/RIght.svg'
import QuestionMark from '../../shared/icons/Questionmark.svg'
import { Link } from 'react-router-dom'
import { Title } from '../../shared/ui/Title'

export default function Auth() {
  const pDefault = 'font-medium text-sm text-overlayForeground'
  return (
    <MainNoNav>
    <Title title={'Auth'}/>
      <div className="mt-[74px] self-center flex flex-col max-w-[312px] w-full">
        <SquareAvatar className={'self-center'} />
        <h1 className="text-primary font-bold text-xl mt-4 text-center">BuyCourses.uz</h1>
        <p className={cva(pDefault, 'text-center mt-6')}>Авторизация</p>
        <Input className="mt-3 bg-foreground1" placeholder="Ваш email" />
        <p className={cva(pDefault, 'mt-2')}>Если у вас нет аккаунта - мы его создадим</p>
        <Button as={Link} to="/auth-confirm" className="mt-5">
          Продолжить
          <Right />
        </Button>
        <div className="mt-12 bg-foreground1 rounded-xl flex flex-col gap-3 p-5 items-center">
          <QuestionMark className="size-4 text-overlayForeground" />
          <p className={cva(pDefault, 'text-center')}>На вашу почту придёт ссылка для входа</p>
        </div>
      </div>
    </MainNoNav>
  )
}
