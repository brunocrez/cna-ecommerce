import { UpdateCartItemRequestType } from '@/interfaces/Cart'
import { updateCartItem } from '@/services/updateCartItem'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: [`updateCartItem`],
    mutationFn: (payload: UpdateCartItemRequestType) => updateCartItem(payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getCartItems'] })
    },
  })

  const triggerUpdate = (payload: UpdateCartItemRequestType) => {
    mutation.mutate(payload)
  }

  return { ...mutation, triggerUpdate }
}
