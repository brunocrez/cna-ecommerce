import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import { DeliveryOptionsResponse } from '@/interfaces/DeliveryOptions'

export async function getDeliveryOptions(productId: string) {
  const response: AxiosResponse<DeliveryOptionsResponse> = await api.get(
    `/delivery?productId=${productId}`,
  )
  return response.data
}
