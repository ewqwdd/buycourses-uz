import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import WarehouseSidebar from '../../widgets/ShopSidebar/WarehouseSidebar'
import $api from '../../shared/lib/$api'
import { useState } from 'react'
import WithdrawTable from './WithdrawTable'
import Withdraw from './Withdraw'

export default function WarehouseWithdraw() {
  const [sum, setSum] = useState()

  return (
    <Main>
      <Title title="Вывод средств" />
      <DefaultHeader title={'Склад'} subTitle={'Пусто'} />
      <div className="flex gap-20 mt-10">
        {sum > 0 ? (
          <Withdraw sum={sum} setSum={setSum} />
        ) : (
          <>
            <WarehouseSidebar setSum={setSum} />
            <WithdrawTable />
          </>
        )}
      </div>
    </Main>
  )
}
