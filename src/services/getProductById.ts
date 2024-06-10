import { AxiosResponse } from 'axios'
import { IProduct } from '@/interfaces/Product'
import { api } from './api/api-routes'

export async function getProductById(id: string) {
  const response: AxiosResponse<IProduct> = await api.get(`products/${id}`)

  return response.data
}
