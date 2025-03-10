import { cva } from '../../shared/lib/cva'
import { Button } from '../../shared/ui/Button'
import { Input } from '../../shared/ui/Input'
import SquareAvatar from '../../shared/ui/SquareAvatar/SquareAvatar'
import { MainNoNav } from '../../widgets/MainNoNav'
import Right from '../../shared/icons/RIght.svg'
import { Title } from '../../shared/ui/Title'
import { useRef, useState } from 'react'
import toast from 'react-hot-toast'
import $api from '../../shared/lib/$api'
import useUserStore from '../../shared/store/useUserStore'
import { AxiosError } from 'axios'
import { emailRegex } from '../../shared/lib/regex'
import { useNavigate } from 'react-router'
import { typings } from '../../shared/lib/typings'

export default function Login() {
  const pDefault = 'font-medium text-sm text-overlayForeground'

  const emailRef = useRef()
  const passwordRef = useRef()
  const [isLoading, setIsLoading] = useState(false)
  const setUser = useUserStore(state => state.setUser)
  const navigate = useNavigate()

  const login = () => {
    const password = passwordRef.current.value
    const email = emailRef.current.value

    if (!email || !password) {
      toast.error(typings.fillAllFields)
      return
    }

    if (emailRegex.test(email) === false) {
      toast.error(typings.emailError)
      return
    }

    setIsLoading(true)
    $api
      .post('/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      })
      .then(async () => {
          const { data } = await $api.get('/me')
          setUser(data)
          navigate('/')
      })
      .catch((e) => {
        console.error(e)
        if (e instanceof AxiosError) {
          toast.error(e.response?.data?.message || typings.authError)
          return
        }
        toast.error(typings.authError)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <MainNoNav>
      <Title title={'Login'} />
      <div
        className={cva('mt-[74px] self-center flex flex-col max-w-[312px] w-full', {
          'animate-pulse pointer-events-none': isLoading,
        })}
      >
        <SquareAvatar className={'self-center'} />
        <h1 className="text-primary font-bold text-xl mt-4 text-center">{typings.brand}</h1>
        <p className={cva(pDefault, 'text-center mt-6')}>{typings.authorization}</p>
        <Input ref={emailRef} className="mt-3 bg-foreground1" placeholder={typings.yourEmail} />
        <Input ref={passwordRef} className="mt-3 bg-foreground1" placeholder={typings.password} type="password" />
        <p className={cva(pDefault, 'mt-2')}>{typings.recovery}</p>
        <Button onClick={login} className="mt-5">
          {typings.login}
          <Right />
        </Button>
      </div>
    </MainNoNav>
  )
}
