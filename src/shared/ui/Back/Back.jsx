import { memo } from 'react'
import Left from '../../icons/Left.svg'

export default memo(function Back() {
  return (
    <div className="flex gap-2 items-center">
      <Left className="size-4" />
      <span className="text-sm text-secondary font-semibold">Назад</span>
    </div>
  )
})
