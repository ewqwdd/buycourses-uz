import { memo } from 'react'
import useUserStore from '../../shared/store/useUserStore'
import { Card } from '../../shared/ui/Card'
import CartItem from './CartTable/CartItem'
import TableHeader from './CartTable/TableHeader'
import TotalTable from './TotalTable/TotalTable'

export default memo(function CartContent({ setStep }) {
  const products = useUserStore((state) => state.basket) ?? []

  return (
    <div className="grid grid-cols-5 gap-10 mt-10">
      <Card className="col-span-3">
        <table>
          <TableHeader />
          <tbody>
            {products.map((e) => (
              <CartItem {...e} key={e.id} />
            ))}
          </tbody>
        </table>
      </Card>
      <TotalTable setStep={setStep} />
    </div>
  )
})
