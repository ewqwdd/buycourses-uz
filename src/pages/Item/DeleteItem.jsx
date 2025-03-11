import { useMutation, useQueryClient } from '@tanstack/react-query'
import $api from '../../shared/lib/$api'
import { useNavigate } from 'react-router'

export default function DeleteItem({ id, slug }) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const mutation = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['category', slug],
      })
      queryClient.resetQueries({
        queryKey: ['category', slug],
      })
      navigate('/' + slug)
    },
    mutationFn: () => $api.delete(`/products/${id}`),
  })

  return (
    <button onClick={mutation.mutate} className="text-red-500 text-sm">
      Delete
    </button>
  )
}
