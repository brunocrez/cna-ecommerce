import { DeliveryOptionType } from './DeliveryOptions'
import { IProductImage } from './ProductImage'

export interface IProduct {
  id: string
  name: string
  slug: string
  description: string
  fullPrice: number
  finalPrice: number
  category: string
  images: IProductImage[]
  available: boolean
}

export type ProductItemType = {
  productId: string
  quantity: number
  freight: DeliveryOptionType
}
