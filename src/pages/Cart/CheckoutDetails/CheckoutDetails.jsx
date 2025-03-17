import { useRef } from 'react'
import BillingDetailsForm from './BillingDetailsForm/BillingDetailsForm'
import Details from './Details/Details'

export default function CheckoutDetails({ setStep }) {
  const formRef = useRef()

  const submitHandle = () => {
    const submitBtn = formRef.current.querySelector('[type="submit"]')
    submitBtn.click()
  }

  return (
    <div className="grid grid-cols-5 gap-10 mt-10">
      <BillingDetailsForm ref={formRef} setStep={setStep} />
      <Details submit={submitHandle} />
    </div>
  )
}
