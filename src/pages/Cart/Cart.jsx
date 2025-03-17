import { useMemo, useState } from 'react'
import { typings } from '../../shared/lib/typings'
import useUserStore from '../../shared/store/useUserStore'
import { Card } from '../../shared/ui/Card'
import { Title } from '../../shared/ui/Title'
import DefaultHeader from '../../widgets/DefaultHeader/DefaultHeader'
import { Main } from '../../widgets/Main'
import CartContent from './CartContent'
import Back from '../../shared/ui/Back/Back'
import CheckoutDetails from './CheckoutDetails/CheckoutDetails'

export default function Cart() {
  const products = useUserStore((state) => state.basket) ?? []
  const [step, setStep] = useState(1)

  let content
  const hasItems = products.length > 0

  if (!hasItems) {
    content = (
      <div className="flex gap-20 mt-10">
        <Card className="min-h-[482px] flex-1 justify-center items-center">
          <h2 className="text-base font-semibold text-teritary">{typings.noProducts}</h2>
        </Card>
      </div>
    )
  } else {
    switch (step) {
      case 1:
        content = <CartContent setStep={setStep} />
        break
      case 2:
        content = <CheckoutDetails setStep={setStep} />
        break
    }
  }

  const backBtn = useMemo(
    () => (
      <button onClick={() => setStep((p) => p - 1)}>
        <Back />
      </button>
    ),
    []
  )
  const productLength = products.length + ' ' + typings.products

  return (
    <Main>
      <Title title={typings.cart} />
      <DefaultHeader sticky={false} title={typings.cart} subTitle={step > 1 ? backBtn : productLength} />
      {content}
    </Main>
  )
}
