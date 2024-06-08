import { useQuery } from '@tanstack/react-query'
import { getProductById } from '@/services/getProductById'

export const useProduct = (id: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['getProduct'],
    queryFn: () => getProductById(id),
    enabled,
  })
}
