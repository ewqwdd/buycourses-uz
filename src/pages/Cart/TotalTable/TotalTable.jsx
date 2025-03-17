import { formatPrice } from '../../../shared/lib/formatPrice'
import { typings } from '../../../shared/lib/typings'
import useUserStore from '../../../shared/store/useUserStore'
import { Button } from '../../../shared/ui/Button'
import { Card } from '../../../shared/ui/Card'
import TotalTableRow from '../TotalTableRow'

export default function TotalTable({ setStep }) {
  const products = useUserStore((state) => state.basket) ?? []

  const total = products.reduce((acc, cur) => cur.price * cur.amount + acc, 0)

  return (
    <Card className="col-span-2 gap-3 self-start">
      <h2 className="text-lg font-semibold text-secondary">{typings.cartTotals}</h2>
      <div className="border border-b border-foreground1 my-1" />
      <TotalTableRow title={typings.subtotal} text={formatPrice(total)} />
      <span className="text-right text-xs text-accentSecondary">{typings.freeShipping}</span>
      <TotalTableRow title={typings.shipping} text={typings.shippingOptionsDescription} />
      <TotalTableRow className="mt-4" title={typings.total} text={formatPrice(total)} />
      <div className="border border-b border-foreground1 my-1" />
      <Button onClick={() => setStep(2)}>{typings.proccedCheckout}</Button>
    </Card>
  )
}
