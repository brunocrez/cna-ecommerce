import { IProduct } from '@/interfaces/Product'

export function checkoutQuery(product: IProduct) {
  const data = { productId: product.id, quantity: 1 }
  const params = Object.entries(data).map(([key, value]) => [
    key,
    String(value),
  ])
  return new URLSearchParams(params).toString()
}
