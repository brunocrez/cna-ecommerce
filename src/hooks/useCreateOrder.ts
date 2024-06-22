import { ProductItemType } from '@/interfaces/Product'
import { LoggedUserType } from '@/interfaces/User'
import { createOrder } from '@/services/createOrder'
import { useMutation } from '@tanstack/react-query'

export const useCreateOrder = (
  user: LoggedUserType,
  items: ProductItemType[],
) => {
  return useMutation({
    mutationKey: [`createOrder-${user.userId}`],
    mutationFn: () => createOrder(user, items),
  })
}
