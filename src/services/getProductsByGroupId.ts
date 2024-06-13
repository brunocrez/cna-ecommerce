import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import { IProduct } from '@/interfaces/Product'

export async function getProductsByGroupId(groupId: number) {
  const response: AxiosResponse<IProduct[]> = await api.get(
    `/products/?groupId=${groupId}`,
  )
  return response.data
}
