import { useNavigate } from 'react-router'
import useUserStore from '../../../shared/store/useUserStore'
import $api from '../../../shared/lib/$api'
import { typings } from '../../../shared/lib/typings'
import toast from 'react-hot-toast'
import { AxiosError } from 'axios'
import debounce from 'lodash/debounce'
import { useCallback, useEffect, useRef } from 'react'

export default function Quantity({ id, amount, setLoading }) {
  const addBasket = useUserStore((state) => state.addBasket)
  const deleteBasket = useUserStore((state) => state.deleteBasket)
  const navigate = useNavigate()
  const inputRef = useRef()
  const user = useUserStore((state) => state.user)

  const addToBasket = (amount) => {
    if (!user) {
      toast.success(typings.productBought)
      addBasket({ id }, amount)
      return
    }
    setLoading(true)
    $api
      .post('/products/cart/' + id, { amount: amount ?? null })
      .then(({ data }) => {
        addBasket(data, amount)
        toast.success(typings.productBought)
      })
      .catch((err) => {
        console.error(err)
        if (err instanceof AxiosError) {
          if (err.response.status === 401) {
            navigate('/login')
          }
          toast.error(err.response?.data?.message)
          return
        }
        toast.error(typings.buyError)
      })
      .finally(() => setLoading(false))
  }

  const deleteFromBasket = () => {
    if (!user) {
      deleteBasket(id)
      toast.success(typings.productBought)
      return
    }
    setLoading(true)
    $api
      .delete('/products/cart/' + id)
      .then(() => {
        deleteBasket(id)
        toast.success(typings.productBought)
      })
      .catch((err) => {
        if (err instanceof AxiosError) {
          if (err.response.status === 401) {
            navigate('/login')
          }
          toast.error(err.response?.data?.message)
          return
        }
        toast.error(typings.buyError)
      })
      .finally(() => setLoading(false))
  }

  const debouncedChangeInput = useCallback(debounce(addToBasket, 500), [])

  const handleChange = () => {
    const value = inputRef.current.value
    inputRef.current.value = value.replace(/\D/g, '')
    if (inputRef.current.value === '0') {
      inputRef.current.value = '1'
    }
    if (inputRef.current.value) {
      debouncedChangeInput(Number(inputRef.current.value))
    }
  }

  const handleBlur = () => {
    if (!inputRef.current.value) {
      inputRef.current.value = amount
    }
  }

  useEffect(() => {
    if (amount) {
      inputRef.current.value = amount
    }
  }, [amount])

  return (
    <div className="flex [&_*]:size-7 [&_button]:text-xl text-center">
      <button onClick={deleteFromBasket}>-</button>
      <input
        onInput={handleChange}
        onBlur={handleBlur}
        ref={inputRef}
        className="flex items-center justify-center text-center bg-foreground1 border-b-overlayForeground/50 border-b transition-all focus:border-b-overlayForeground outline-none focus:outline-none text-[17px]"
        defaultValue={amount ?? 1}
      />
      <button onClick={() => addToBasket()}>+</button>
    </div>
  )
}
