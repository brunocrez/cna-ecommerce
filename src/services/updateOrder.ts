import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import {
  CreateOrderResponseType,
  UpdateOrderRequestType,
} from '@/interfaces/Order'

export async function updateOrder(
  payload: UpdateOrderRequestType,
): Promise<CreateOrderResponseType> {
  const response: AxiosResponse<CreateOrderResponseType> = await api.put(
    '/orders',
    payload,
  )
  return response.data
}
