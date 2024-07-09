import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import {
  UpdateCartItemRequestType,
  UpdateCartItemResponseType,
} from '@/interfaces/Cart'

export async function updateCartItem(
  payload: UpdateCartItemRequestType,
): Promise<UpdateCartItemResponseType> {
  const { cartItemId, quantity } = payload
  const response: AxiosResponse<UpdateCartItemResponseType> = await api.put(
    `/cart-item/${cartItemId}`,
    { quantity },
  )
  return response.data
}
