import { typings } from '../../../shared/lib/typings'

export default function TableHeader() {
  return (
    <thead>
      <tr className="text-teritary text-left [&_th]:pb-4">
        <th className="pl-8" scope="col">
          {typings.product}
        </th>
        <th scope="col">{typings.price}</th>
        <th scope="col">{typings.quantity}</th>
        <th scope="col">{typings.subtotal}</th>
      </tr>
    </thead>
  )
}
