import { memo } from 'react'
import { Card } from '../../shared/ui/Card'

export default memo(function CreationCard() {
  return (
    <Card className="min-h-[202px] gap-1 px-8 justify-center items-center">
      <h2 className="text-base font-semibold text-primary text-center">Создание объявлений</h2>
      <p className="text-sm text-secondary font-medium text-center">
        Вы можете выложить свои материалы и заработать на этом
      </p>
    </Card>
  )
})
