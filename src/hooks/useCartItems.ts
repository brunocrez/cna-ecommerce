import { useQuery } from '@tanstack/react-query'
import { getCartItems } from '@/services/getCartItems'

export const useCartItems = (userId: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['getCartItems'],
    queryFn: () => getCartItems(userId),
    enabled,
  })
}
