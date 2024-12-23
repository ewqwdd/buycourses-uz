import { Button } from "../../shared/ui/Button";
import SquareAvatar from "../../shared/ui/SquareAvatar/SquareAvatar";
import { MainNoNav } from "../../widgets/MainNoNav";
import Refresh from '../../shared/icons/Refresh.svg'

export default function AuthConfirm() {
    return (
    <MainNoNav>
        <div className="mt-[74px] self-center flex flex-col max-w-[312px] w-full font-medium text-base text-secondary">
            <SquareAvatar className={'self-center'} />
            <h1 className="text-primary font-bold text-xl mt-4 text-center">BuyCourses.uz</h1>
            <p className="text-center mt-6 px-5">
                Мы отправили ссылку для входа на
            </p>
            <p className="text-center text-primary px-5">
                hsythesun@ichor.gg
            </p>
            <Button className="mt-6">
                <Refresh className="size-4 text-primary" />
                Отправить ещё раз
            </Button>
        </div>
    </MainNoNav>
  )
}
