import { AxiosResponse } from 'axios'
import { api } from './api/api-routes'
import { IComment } from '@/interfaces/Comment'

export async function getCommentsByProductId(id: string): Promise<IComment[]> {
  const response: AxiosResponse<IComment[]> = await api.get(
    `/comments?productId=${id}`,
  )
  return response.data
}
