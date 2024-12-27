import { cva } from '../../shared/lib/cva'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'
import SquareAvatar from '../../shared/ui/SquareAvatar/SquareAvatar'
import { MainNoNav } from '../../widgets/MainNoNav'
import Right from '../../shared/icons/RIght.svg'
import QuestionMark from '../../shared/icons/Questionmark.svg'
import { Title } from '../../shared/ui/Title'
import { useRef, useState } from 'react'
import $api from '../../lib/$api'
import toast from 'react-hot-toast'
import useUserStore from '../../shared/store/useUserStore'
import { AxiosError } from 'axios'
import { emailRegex } from '../../shared/lib/regex'

export default function Register() {
  const pDefault = 'font-medium text-sm text-overlayForeground'
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const setUser = useUserStore((state) => state.setUser)

  const register = () => {
    const password = passwordRef.current.value
    const passwordConfirm = passwordConfirmRef.current.value
    const email = emailRef.current.value

    if (!email || !password || !passwordConfirm) {
      toast.error('Заполните все поля')
      return
    }

    if (emailRegex.test(email) === false) {
      toast.error('Некорректный email')
      return
    }

    if (password.length < 8) {
      toast.error('Пароль должен быть не менее 8 символов')
      return
    }

    if (password !== passwordConfirm) {
      toast.error('Пароли не совпадают')
      return
    }

    setIsLoading(true)
    $api
      .post('/register', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
        passwordConfirm: passwordConfirmRef.current.value,
      })
      .then(async () => {
        const { data } = await $api.get('/me')
        setUser(data)
      })
      .catch((e) => {
        console.error(e)
        if (e instanceof AxiosError) {
          toast.error(e.response?.data?.message || 'Ошибка регистрации')
          return
        }
        toast.error('Ошибка регистрации')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <MainNoNav>
      <Title title={'Register'} />
      <div
        className={cva('mt-[74px] self-center flex flex-col max-w-[312px] w-full', {
          'animate-pulse pointer-events-none': isLoading,
        })}
      >
        <SquareAvatar className={'self-center'} />
        <h1 className="text-primary font-bold text-xl mt-4 text-center">BuyCourses.uz</h1>
        <p className={cva(pDefault, 'text-center mt-6')}>Регистарция</p>
        <Input ref={emailRef} className="mt-3 bg-foreground1" placeholder="Ваш email" />
        <Input ref={passwordRef} className="mt-3 bg-foreground1" type="password" placeholder="Пароль" />
        <Input
          ref={passwordConfirmRef}
          className="mt-3 bg-foreground1"
          type="password"
          placeholder="Подтвердите пароль"
        />
        <p className={cva(pDefault, 'mt-2')}>Если у вас нет аккаунта - мы его создадим</p>
        <Button className="mt-5" onClick={register}>
          Создать аккаунт
          <Right />
        </Button>
        <div className="mt-12 bg-foreground1 rounded-xl flex flex-col gap-3 p-5 items-center">
          <QuestionMark className="size-4 text-overlayForeground" />
          <p className={cva(pDefault, 'text-center')}>Подтверждать почту не нужно</p>
        </div>
      </div>
    </MainNoNav>
  )
}
