import { cva } from '../../shared/lib/cva'
import { formatPrice } from '../../shared/lib/formatPrice'
import { Card } from '../../shared/ui/Card'
import { Status } from '../../shared/ui/Status'
import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import WarehouseSidebar from '../../widgets/ShopSidebar/WarehouseSidebar'
import Row from './Row'
import styles from './WarehouseWithdraw.module.css'

const transactions = [
  {
    id: 1,
    status: 'success',
    amount: 2504.21,
  },
  {
    id: 2,
    status: 'decline',
    amount: 2504.21,
  },
  {
    id: 3,
    status: 'pending',
    amount: 2504.21,
  },
]

export default function WarehouseWithdraw() {
  return (
    <Main>
      <Title title="Вывод средств" />
      <DefaultHeader title={'Склад'} subTitle={'Пусто'} />
      <div className="flex gap-20 mt-10">
        <WarehouseSidebar />
        <Card className={cva('min-h-[482px] flex-1', styles.table)}>
          <Row heading values={['Дата', 'Номер карты', 'Статус', 'Сумма']} />
          {transactions.map((transaction) => (
            <Row
              key={transaction.id}
              values={[
                '12.12.2021',
                '1234 **** **** 1234',
                <Status key={'status'} status={transaction.status} />,
                formatPrice(transaction.amount),
              ]}
            />
          ))}
        </Card>
      </div>
    </Main>
  )
}
