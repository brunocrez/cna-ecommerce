import { useQuery } from '@tanstack/react-query'
import { getProductById } from '@/services/getProductById'

export const useProduct = (id: string, enabled: boolean) => {
  return useQuery({
    queryKey: [`getProduct-${id}`],
    queryFn: () => getProductById(id),
    enabled,
    staleTime: 30 * 60 * 1000, // 30 mins
  })
}
