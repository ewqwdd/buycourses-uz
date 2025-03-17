import { useState } from 'react'
import { formatPrice } from '../../../../shared/lib/formatPrice'
import { typings } from '../../../../shared/lib/typings'
import useUserStore from '../../../../shared/store/useUserStore'
import { Card } from '../../../../shared/ui/Card'
import TotalTableRow from '../../TotalTableRow'
import { Link } from 'react-router-dom'
import { Button } from '../../../../shared/ui/Button'

export default function Details({ submit }) {
  const products = useUserStore((state) => state.basket) ?? []
  const [acceptedTerms, setAcceptedTerms] = useState(false)

  const total = products.reduce((acc, cur) => cur.price * cur.amount + acc, 0)

  return (
    <Card className="col-span-2  gap-3 self-start">
      <h2 className="text-accentSecondary font-semibold text-lg">{typings.yourOrder}</h2>
      <TotalTableRow title={typings.subtotal} text={formatPrice(total)} />
      <TotalTableRow title={typings.shipping} text={typings.freeShipping} />
      <TotalTableRow title={typings.total} text={formatPrice(total)} />
      <div className="flex gap-4 my-8 items-center">
        <input
          id="acceptedTerms"
          name="acceptedTerms"
          checked={acceptedTerms}
          onChange={() => setAcceptedTerms(!acceptedTerms)}
          type="checkbox"
        />
        <label htmlFor="acceptedTerms" className="[&_a]:text-accent2 text-sm font-medium">
          I{`'`}ve read and accept the <Link to="/terms-and-conditions">Terms and Conditions</Link> and{' '}
          <Link to="/terms-and-conditions">Refund Policy *</Link>
        </label>
      </div>
      <Button className="text-base" disabled={!acceptedTerms} onClick={submit}>
        {typings.placeOrder}
      </Button>
      <p className="[&_a]:text-accent2 text-sm font-medium text-secondary">
        Your personal data will be used to process your order, support your experience throughout this website, and for
        other purposes described in our <Link to="/privacy-policy">Privacy policy</Link>.
      </p>
    </Card>
  )
}
