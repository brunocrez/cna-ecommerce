import { ProductItemType } from '@/interfaces/Product'
import { LoggedUserType } from '@/interfaces/User'
import { createOrder } from '@/services/createOrder'
import { useQuery } from '@tanstack/react-query'

export const useCreateOrder = (
  user: LoggedUserType,
  items: ProductItemType[],
  enabled: boolean,
) => {
  return useQuery({
    queryKey: [`createOrder-${user.userId}-${items[0]?.productId}`],
    queryFn: () => createOrder(user, items),
    enabled,
    refetchOnWindowFocus: false,
  })
}
