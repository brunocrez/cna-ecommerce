import { IProduct, ProductItemType } from './Product'
import { LoggedUserType } from './User'

type OrderResponseType = {
  id: string
  userId: string
  status: string
  total: number
  subTotal: number
  totalFreight: number
  createdAt: Date
}

type OrderProductsType = {
  id: string
  orderId: string
  productId: string
  quantity: number
  price: number
  freight: number
  Product: IProduct
}

export type CreateOrderResponseType = {
  order: OrderResponseType
  orderItems: OrderProductsType[]
}

export type CreateOrderRequestType = {
  items: ProductItemType[]
  user: LoggedUserType
}
