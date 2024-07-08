import { IProduct } from './Product'

export type CreateCartItemRequestType = {
  userId: string
  quantity: number
  productId: string
}

type CartItems = {
  cartId: string
  productId: string
  quantity: number
  product: IProduct
}

export type GetCartItemResponseType = {
  cartId: string
  userId: string
  items: CartItems[]
  totalItems: number
  totalPrice: number
}