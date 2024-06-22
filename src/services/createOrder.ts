import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import { LoggedUserType } from '@/interfaces/User'
import { ProductItemType } from '@/interfaces/Product'
import { CreateOrderResponseType } from '@/interfaces/Order'

export async function createOrder(
  user: LoggedUserType,
  items: ProductItemType[],
): Promise<CreateOrderResponseType> {
  const response: AxiosResponse<CreateOrderResponseType> = await api.post(
    '/orders',
    { user, items },
  )
  return response.data
}
