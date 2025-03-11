import { useMutation, useQueryClient } from '@tanstack/react-query'
import $api from '../../shared/lib/$api'
import { useNavigate } from 'react-router'

export default function DeleteCategory({ slug }) {
  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const mutation = useMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['categories'],
      })

      navigate('/')
    },
    mutationFn: () => $api.delete(`/categories/${slug}`),
  })

  return (
    <button onClick={mutation.mutate} className="text-red-500 text-sm ml-auto">
      Delete
    </button>
  )
}
