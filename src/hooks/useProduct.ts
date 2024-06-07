import { useQuery } from '@tanstack/react-query'
import { getProductById } from '@/services/getProductById'

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['getProduct'],
    queryFn: () => getProductById(id),
  })
}
