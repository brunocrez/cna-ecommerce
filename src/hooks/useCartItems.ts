import { useQuery } from '@tanstack/react-query'
import { getCartItems } from '@/services/getCartItems'

export const useCartItems = (userId: string, enabled: boolean) => {
  return useQuery({
    queryKey: [`getCartItems-${userId}`],
    queryFn: () => getCartItems(userId),
    enabled,
    staleTime: 30 * 60 * 1000, // 30 mins
  })
}
