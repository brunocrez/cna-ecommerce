import { IProduct } from '@/interfaces/Product'

export function checkoutQuery(product: IProduct) {
  const { id, finalPrice } = product
  const data = { productId: id, price: finalPrice, quantity: 1 }
  const params = Object.entries(data).map(([key, value]) => [
    key,
    String(value),
  ])
  return new URLSearchParams(params).toString()
}
