import { useQuery } from '@tanstack/react-query'
import { getDeliveryOptions } from '@/services/getDeliveryOptions'

export const useDeliveryOptions = (productId: string, enabled: boolean) => {
  return useQuery({
    queryKey: [`getDeliveryOptions-${productId}`],
    queryFn: () => getDeliveryOptions(productId),
    enabled,
  })
}
