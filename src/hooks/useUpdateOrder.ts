import { updateOrder } from '@/services/updateOrder'
import { UseMutationResult, useMutation } from '@tanstack/react-query'

type UpdateOrderRequestType = {
  userId: string
  status: string
}

export const useUpdateOrder = () => {
  const mutation = useMutation({
    mutationKey: [`updateOrder`],
    mutationFn: (payload: UpdateOrderRequestType) => updateOrder(payload),
  })

  const triggerMutation = (payload: UpdateOrderRequestType) => {
    mutation.mutate(payload)
  }

  return { ...mutation, triggerMutation }
}
