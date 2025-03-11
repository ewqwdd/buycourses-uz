import { Card } from '../../shared/ui/Card'
import Row from './Row'
import { useQuery } from '@tanstack/react-query'
import $api from '../../shared/lib/$api'
import { cva } from '../../shared/lib/cva'
import styles from './WarehouseWithdraw.module.css'
import { Status } from '../../shared/ui/Status'
import { formatPrice } from '../../shared/lib/formatPrice'
import { typings } from '../../shared/lib/typings'

const fetchWithdraws = async () => {
  const { data } = await $api.get('/withdraws')
  return data
}

export default function WithdrawTable() {
  const { data, isFetching } = useQuery({
    queryKey: 'withdraws',
    queryFn: fetchWithdraws,
    placeholderData: [],
    staleTime: 1000 * 60 * 5,
  })
  return (
    <Card
      className={cva('min-h-[482px] flex-1 relative', styles.table, {
        'animate-pulse pointer-events-none': isFetching,
      })}
    >
      <Row heading values={[typings.date, typings.cardNumber, typings.status, typings.amount]} />
      {data.map((transaction) => (
        <Row
          key={transaction.id}
          values={[
            transaction.date.slice(0, 10),
            transaction.cardNumber,
            <Status key={'status'} status={transaction.status} />,
            formatPrice(transaction.amount),
          ]}
        />
      ))}
      {data.length === 0 && (
        <h2 className="text-base font-semibold text-teritary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {typings.noWithdrawals}
        </h2>
      )}
    </Card>
  )
}
