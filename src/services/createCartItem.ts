import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import {
  CreateCartItemRequestType,
  GetCartItemResponseType,
} from '@/interfaces/Cart'

export async function createCartItem(
  payload: CreateCartItemRequestType,
): Promise<GetCartItemResponseType> {
  const response: AxiosResponse<GetCartItemResponseType> = await api.post(
    '/cart',
    payload,
  )
  return response.data
}
