import { forwardRef, useState } from 'react'
import { typings } from '../../../../shared/lib/typings'
import useBillingFormStore from '../../../../shared/store/billingFormStore'
import { Card } from '../../../../shared/ui/Card'
import { differentAddressInputs, inputsConfig } from './config'
import InputWithLabel from './InputWithLabel'

export default forwardRef(function BillingDetailsForm({ setStep }, ref) {
  const formState = useBillingFormStore((state) => state.formState)
  const setFormState = useBillingFormStore((state) => state.setFormState)
  const [errorState, setErrorState] = useState({})
  const altAddress = formState.differentAddress

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setErrorState((prev) => ({ ...prev, [e.target.name]: '' }))
  }

  const validateForm = () => {
    const errors = {}

    const requiredFields = altAddress ? [...inputsConfig, ...differentAddressInputs] : inputsConfig

    requiredFields.forEach(({ name, required }) => {
      if (required && !formState[name]) {
        errors[name] = typings.requiredField
      }
    })

    setErrorState(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      console.log('Форма отправлена:', formState)
      setStep(3)
      // Дальнейшая обработка, например, отправка данных на сервер
    }
  }

  return (
    <Card className="col-span-3">
      <h2 className="text-lg text-accentSecondary font-semibold">{typings.billingDetails}</h2>
      <form onSubmit={handleSubmit} ref={ref}>
        <div className="grid grid-cols-2 gap-2 gap-y-4 mt-6">
          {inputsConfig.map(({ name, label, required, cols, autoComplete, type }) => (
            <InputWithLabel
              cols={cols}
              value={formState[name]}
              name={name}
              label={label}
              onChange={handleChange}
              key={name}
              required={required}
              autoComplete={autoComplete}
              error={errorState[name]}
              type={type}
            />
          ))}
        </div>
        <div className="flex gap-4 my-8 items-center">
          <input
            id="differentAddress"
            name="differentAddress"
            checked={altAddress}
            onChange={() => setFormState((prev) => ({ ...prev, differentAddress: !prev.differentAddress }))}
            type="checkbox"
          />
          <label htmlFor="differentAddress">{typings.differentAddress}</label>
        </div>
        {altAddress && (
          <div className="grid grid-cols-2 gap-2 gap-y-4">
            {differentAddressInputs.map(({ name, label, required, cols, autoComplete, type }) => (
              <InputWithLabel
                cols={cols}
                value={formState[name]}
                name={name}
                label={label}
                onChange={handleChange}
                key={name}
                required={required}
                autoComplete={autoComplete}
                error={errorState[name]}
                type={type}
              />
            ))}
          </div>
        )}
        <input type="submit" className="hidden" />
      </form>
    </Card>
  )
})
