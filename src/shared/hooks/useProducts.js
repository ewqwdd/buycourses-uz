import { useQuery } from '@tanstack/react-query'
import $api from '../lib/$api'

const fetchProducts = async () => {
  try {
    const { data } = await $api.get(`/products`)
    return data
  } catch (error) {
    console.error('Error while loading category:', error)
    return []
  }
}

export const useProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
    placeholderData: [],
    staleTime: 5 * 60 * 1000,
  })
