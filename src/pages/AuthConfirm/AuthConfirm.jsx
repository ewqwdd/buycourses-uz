import { Button } from "../../shared/ui/Button";
import SquareAvatar from "../../shared/ui/SquareAvatar/SquareAvatar";
import { MainNoNav } from "../../widgets/MainNoNav";
import Refresh from '../../shared/icons/Refresh.svg'
import { Title } from "../../shared/ui/Title";
import { useSearchParams } from "react-router-dom";
import $api from "../../shared/lib/$api";
import { useEffect, useRef, useState } from "react";

export default function AuthConfirm() {
    const [searchParams] = useSearchParams()
    const email = searchParams.get('email')
    const [isDisabled, setIsDisabled] = useState(false)
    const timeoutRef = useRef()

    const resend = () => {
        $api.post('/resend', {
            email
        })
        .then(() => {
            setIsDisabled(true)
            timeoutRef.current = setTimeout(() => {
                setIsDisabled(false)
            }, 3 * 60 * 1000)
        }).catch((e) => {
            console.error(e)
        })
    }

    useEffect(() => {
        return () => {
            clearTimeout(timeoutRef.current)
        }
    }, [])
    
    return (
    <MainNoNav>
        <Title title={'Confirmation'}/>
        <div className="mt-[74px] self-center flex flex-col max-w-[312px] w-full font-medium text-base text-secondary">
            <SquareAvatar className={'self-center'} />
            <h1 className="text-primary font-bold text-xl mt-4 text-center">BuyCourses.uz</h1>
            <p className="text-center mt-6 px-5">
                Мы отправили ссылку для входа на
            </p>
            <p className="text-center text-primary px-5">
                {email}
            </p>
            <Button className="mt-6" variant="neutral" onClick={resend} disabled={isDisabled}>
                <Refresh className="size-4 text-primary" />
                Отправить ещё раз
            </Button>
        </div>
    </MainNoNav>
  )
}
