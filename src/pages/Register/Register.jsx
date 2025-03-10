import { cva } from '../../shared/lib/cva'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'
import SquareAvatar from '../../shared/ui/SquareAvatar/SquareAvatar'
import { MainNoNav } from '../../widgets/MainNoNav'
import Right from '../../shared/icons/RIght.svg'
import QuestionMark from '../../shared/icons/Questionmark.svg'
import { Title } from '../../shared/ui/Title'
import { useRef, useState } from 'react'
import $api from '../../shared/lib/$api'
import toast from 'react-hot-toast'
import useUserStore from '../../shared/store/useUserStore'
import { AxiosError } from 'axios'
import { emailRegex } from '../../shared/lib/regex'
import { useNavigate } from 'react-router'
import { typings } from '../../shared/lib/typings'

export default function Register() {
  const pDefault = 'font-medium text-sm text-overlayForeground'
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const setUser = useUserStore((state) => state.setUser)
  const navigate = useNavigate()

  const register = () => {
    const password = passwordRef.current.value
    const passwordConfirm = passwordConfirmRef.current.value
    const email = emailRef.current.value

    if (!email || !password || !passwordConfirm) {
      toast.error(typings.fillAllFields)
      return
    }

    if (emailRegex.test(email) === false) {
      toast.error(typings.emailError)
      return
    }

    if (password.length < 8) {
      toast.error(typings.passwordError)
      return
    }

    if (password !== passwordConfirm) {
      toast.error(typings.passwordMatchError)
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
        navigate('/')
      })
      .catch((e) => {
        console.error(e)
        if (e instanceof AxiosError) {
          toast.error(e.response?.data?.message || typings.registerError)
          return
        }
        toast.error(typings.registerError)
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
        <h1 className="text-primary font-bold text-xl mt-4 text-center">{typings.brand}</h1>
        <p className={cva(pDefault, 'text-center mt-6')}>{typings.registration}</p>
        <Input ref={emailRef} className="mt-3 bg-foreground1" placeholder={typings.yourEmail} />
        <Input ref={passwordRef} className="mt-3 bg-foreground1" type="password" placeholder={typings.password} />
        <Input
          ref={passwordConfirmRef}
          className="mt-3 bg-foreground1"
          type="password"
          placeholder={typings.confirmPassword}
        />
        <p className={cva(pDefault, 'mt-2')}>{typings.noAccount}</p>
        <Button className="mt-5" onClick={register}>
          {typings.createAccount}
          <Right />
        </Button>
        <div className="mt-12 bg-foreground1 rounded-xl flex flex-col gap-3 p-5 items-center">
          <QuestionMark className="size-4 text-overlayForeground" />
          <p className={cva(pDefault, 'text-center')}>{typings.noEmailConfirm}</p>
        </div>
      </div>
    </MainNoNav>
  )
}
