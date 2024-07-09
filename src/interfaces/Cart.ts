import { IProduct } from './Product'

export type CreateCartItemRequestType = {
  userId: string
  quantity: number
  productId: string
}

type CartItems = {
  id: string
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

export type UpdateCartItemResponseType = Omit<CartItems, 'product'>

export type UpdateCartItemRequestType = {
  cartItemId: string
  quantity: number
}
