import { Card } from '../../shared/ui/Card'
import MoneyBox from '../../shared/icons/MoneyBox.svg'
import Right from '../../shared/icons/RIght.svg'
import { Input } from '../../shared/ui/Input'
import { Button } from '../../shared/ui/Button'
import PropTypes from 'prop-types'
import { useEffect, useRef } from 'react'
import toast from 'react-hot-toast'

const _subTitle = 'После пополнения вы сможете купить что-либо в нашем магазине'
const _afterInput = 'Humo, Uzcard'
const _paceholder = 'Сумма для пополнения'
const _buttonText = 'Оплатить картой'

export default function TopUpCard({
  subTitle = _subTitle,
  afterInput = _afterInput,
  placeholder = _paceholder,
  buttonText = _buttonText,
  setSum,
  renderAfterInput,
  onSubmit: _onSubmit,
}) {
  const inputRef = useRef()
  const afterInputRef = useRef()

  const onKeyDown = (e) => {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab']

    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key) && !e.ctrlKey) {
      e.preventDefault()
    }
  }

  const onSubmit = () => {
    const sum = inputRef.current.value
    if (_onSubmit) {
      _onSubmit(sum)
      return
    }
    if (!sum) {
      return toast.error('Введите сумму')
    }
    setSum?.(sum)
  }

  const onChange = (e) => {
    renderAfterInput?.(e.target.value, afterInputRef.current)
  }

  useEffect(() => {
    renderAfterInput?.(inputRef.current.value, afterInputRef.current)
  }, [])

  return (
    <Card className="gap-4 items-center min-h-[422px] justify-center">
      <MoneyBox className="size-12 text-overlay" />
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-base text-primary  text-center">Введите сумму</h3>
        <p className="text-sm text-secondary text-center font-medium">{subTitle}</p>
      </div>
      <div className="flex flex-col gap-2 self-stretch">
        <Input
          onKeyDown={onKeyDown}
          ref={inputRef}
          placeholder={placeholder}
          right={<span className="text-overlayForeground font-medium text-base">UZS</span>}
          onChange={onChange}
        />
        <span className="text-sm text-overlayForeground font-medium" ref={afterInputRef}>
          {afterInput}
        </span>
      </div>
      <Button className="self-stretch" onClick={onSubmit}>
        {buttonText}
        <Right className="size-4" />
      </Button>
    </Card>
  )
}

TopUpCard.propTypes = {
  subTitle: PropTypes.string,
  afterInput: PropTypes.string,
  setSum: PropTypes.func.isRequired,
}
