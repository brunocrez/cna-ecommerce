import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import { CreateCartItemRequestType } from '@/interfaces/Cart'

export async function createCartItem(
  payload: CreateCartItemRequestType,
): Promise<void> {
  const response: AxiosResponse<void> = await api.post('/cart', payload)
  return response.data
}
