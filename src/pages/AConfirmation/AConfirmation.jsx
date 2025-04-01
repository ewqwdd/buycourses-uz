import { useSearchParams } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import $api from '../../shared/lib/$api'
import toast, { LoaderIcon } from 'react-hot-toast'

export default function AConfirmation() {
  const [searchParams] = useSearchParams()

  const id = searchParams.get('id')

  useLayoutEffect(() => {
    $api
      .get(`/transactions/a/${id}`)
      .then(({ data }) => {
        if (!data.returnUrl) {
          toast.error('Payment error')
          return
        }
        console.log(data)
        window.location.replace(data.returnUrl)
      })
      .catch(() => {
        toast.error('Payment error')
      })
  }, [id])

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <LoaderIcon className="!size-6" />
    </div>
  )
}
