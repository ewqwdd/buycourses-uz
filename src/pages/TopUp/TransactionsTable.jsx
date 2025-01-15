import { Fragment } from 'react'
import { formatPrice } from '../../shared/lib/formatPrice'
import useUserStore from '../../shared/store/useUserStore'
import { cva } from '../../shared/lib/cva'

export default function TransactionsTable({ transactions }) {
  const text = (i, heading) =>
    cva('text-sm font-medium text-primary px-5 h-50 flex items-center min-w-[120px]', {
      'text-secondary pb-2 pt-3': heading,
      'border-t-foreground1 border-t py-1': !heading,
      'justify-end': i % 2 === 0,
    })

  return (
    <div className="grid grid-cols-2 w-full">
      <span className={text(1, true)}>Дата</span>
      <span className={text(2, true)}>Сумма</span>
      {transactions.map((elem) => (
        <Fragment key={elem.id}>
          <span className={text(1)}>{elem.createdAt.slice(0, 10)}</span>
          <span className={text(2)}>{formatPrice(elem.amount ?? 0)}</span>
        </Fragment>
      ))}
    </div>
  )
}
