import toast from 'react-hot-toast'
import $api from '../../../shared/lib/$api'
import { typings } from '../../../shared/lib/typings'
import { AxiosError } from 'axios'
import { useNavigate } from 'react-router'
import useUserStore from '../../../shared/store/useUserStore'
import XIcon from '../../../shared/icons/X.svg'

export default function DeleteFromBasker({ setLoading, id }) {
  const navigate = useNavigate()
  const deleteFullAmount = useUserStore((state) => state.deleteFullAmount)
  const user = useUserStore((state) => state.user)

  const deleteFromBasket = () => {
    setLoading(true)
    if (!user) {
      deleteFullAmount(id)
      toast.success(typings.deletedFromCart)
      return
    }
    $api
      .delete('/products/cart/' + id, { data: { deleteAll: true } })
      .then(() => {
        deleteFullAmount(id)
        toast.success(typings.deletedFromCart)
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

  return (
    <button onClick={deleteFromBasket} className="text-secondary hover:text-teritary transition-all">
      <XIcon className="size-4" />
    </button>
  )
}
