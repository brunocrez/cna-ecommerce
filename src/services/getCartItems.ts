import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import { GetCartItemResponseType } from '@/interfaces/Cart'

export async function getCartItems(
  userId: string,
): Promise<GetCartItemResponseType> {
  const response: AxiosResponse<GetCartItemResponseType> = await api.get(
    `/cart?userId=${userId}`,
  )
  return response.data
}
