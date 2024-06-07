import axios, { AxiosResponse } from 'axios'
import { IProduct } from '@/interfaces/Product'

export async function getProductById(id: string) {
  const response: AxiosResponse<IProduct> = await axios.get(
    `http://localhost:8080/products/${id}`,
  )

  return response.data
}
