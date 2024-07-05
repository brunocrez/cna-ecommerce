import { ProductItemType } from '@/interfaces/Product'
import { LoggedUserType } from '@/interfaces/User'
import { createOrder } from '@/services/createOrder'
import { useQuery } from '@tanstack/react-query'

export const useCreateOrder = (
  user: LoggedUserType,
  items: ProductItemType[],
  addressId: string,
  enabled: boolean,
) => {
  return useQuery({
    queryKey: [`createOrder-${user.userId}-${items[0]?.productId}`],
    queryFn: () => createOrder(user, items, addressId),
    enabled,
    refetchOnWindowFocus: false,
  })
}
