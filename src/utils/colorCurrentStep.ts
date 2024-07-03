import { OrderStatus } from './orderStatus'

export function colorCurrentStep(status: string) {
  if (status === OrderStatus.ACCEPTED) {
    return 0
  }

  if (status === OrderStatus.SENT) {
    return 1
  }

  if (status === OrderStatus.IN_TRANSIT) {
    return 2
  }

  return 3
}
