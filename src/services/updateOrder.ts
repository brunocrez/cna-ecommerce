import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import {
  UpdateOrderResponseType,
  UpdateOrderRequestType,
} from '@/interfaces/Order'

export async function updateOrder(
  payload: UpdateOrderRequestType,
): Promise<UpdateOrderResponseType> {
  const response: AxiosResponse<UpdateOrderResponseType> = await api.put(
    '/orders',
    payload,
  )
  return response.data
}
