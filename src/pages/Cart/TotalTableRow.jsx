import { cva } from '../../shared/lib/cva'

export default function TotalTableRow({ title, text, className }) {
  return (
    <div className={cva('flex justify-between text-secondary font-medium text-sm', className)}>
      <span>{title ?? ' '}</span>
      <span className={'text-primary font-normal'}>{text ?? ' '}</span>
    </div>
  )
}
