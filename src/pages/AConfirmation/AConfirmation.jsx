import { useSearchParams } from 'react-router-dom'
import { Card } from '../../shared/ui/Card'
import { Main } from '../../widgets/Main'
import { useLayoutEffect } from 'react'
import $api from '../../shared/lib/$api'
import toast from 'react-hot-toast'

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
    <Main>
      <Card className={'min-h-40 animate-pulse justify-center items-center'}>Loading...</Card>
    </Main>
  )
}
