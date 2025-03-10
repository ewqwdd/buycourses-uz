import { useQuery } from '@tanstack/react-query'
import $api from '../lib/$api'

const fetchCategories = async () => {
  try {
    const { data } = await $api.get(`/categories`)
    return data
  } catch (error) {
    console.error('Error while loading category:', error)
    return []
  }
}

export const useCategories = () =>
  useQuery({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    placeholderData: [],
    staleTime: 5 * 60 * 1000,
  })
