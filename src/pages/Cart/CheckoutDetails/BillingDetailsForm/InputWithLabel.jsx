import { memo } from 'react'
import { Input } from '../../../../shared/ui/Input'
import { cva } from '../../../../shared/lib/cva'

export default memo(function InputWithLabel({ label, name, value, onChange, cols = 1, required, error, type }) {
  return (
    <div
      className={cva('flex flex-col gap-1.5 text-sm', {
        'col-span-1': cols === 1,
        'col-span-2': cols === 2,
      })}
    >
      <p className="text-primary font-medium">
        {label}
        {required && <span className="text-red-600">{' *'}</span>}
      </p>

      <Input name={name} onChange={onChange} value={value} type={type} className="bg-overlay/60" />
      {error && <span className="font-medium text-red-500">{error}</span>}
    </div>
  )
})
