import { Card } from '../../shared/ui/Card'
import ShopSidebarSwitcher from './ShopSidebarSwitcher'
import MoneyBox from '../../shared/icons/MoneyBox.svg'
import { Button } from '../../shared/ui/Button'
import RightUp from '../../shared/icons/RIghtUp.svg'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { AsideWrapper } from '../AsideWrapper'

export default memo(function ShopSidebar() {
  return (
    <AsideWrapper key={'shop-sidebar-wrapper'}>
      <ShopSidebarSwitcher key={'shop-sidebar-switcher'} />
      <div className="flex flex-col gap-4">
        <Card className="gap-4 items-center min-h-[266px] px-16">
          <MoneyBox className="size-12 text-overlay" />
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-base text-primary  text-center">Пополните баланс</h3>
            <p className="text-sm text-secondary text-center font-medium">
              Пополните баланс и получите доступ к курсам
            </p>
          </div>
        </Card>
        <Button variant="secondary" as={Link} to="/top-up">
            Пополнить баланс
            <RightUp className="size-4" />
        </Button>
      </div>
    </AsideWrapper>
  )
}
)