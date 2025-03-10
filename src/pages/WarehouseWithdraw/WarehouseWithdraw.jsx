import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import WarehouseSidebar from '../../widgets/ShopSidebar/WarehouseSidebar'
import { useState } from 'react'
import WithdrawTable from './WithdrawTable'
import Withdraw from './Withdraw'
import { typings } from '../../shared/lib/typings'

export default function WarehouseWithdraw() {
  const [sum, setSum] = useState()

  return (
    <Main>
      <Title title={typings.withdraw} />
      <DefaultHeader title={typings.myPurchases} subTitle={typings.empty} />
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
