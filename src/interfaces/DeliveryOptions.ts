type DeliveryOptionType = {
  name: string
  price: number
  deadline: number
}

export type DeliveryOptionsResponse = {
  freeShipping: boolean
  deliveryOptions: DeliveryOptionType[]
}
