import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'

export async function deleteCartItem(cartItemId: string): Promise<void> {
  const response: AxiosResponse<void> = await api.delete(
    `/cart-item/${cartItemId}`,
  )
  return response.data
}
