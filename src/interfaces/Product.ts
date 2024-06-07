import { IProductImage } from './ProductImage'

export interface IProduct {
  id: string
  name: string
  slug: string
  description: string
  price: number
  category: string
  images: IProductImage[]
}
