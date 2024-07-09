import { deleteCartItem } from '@/services/deleteCartItem'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: [`deleteCartItem`],
    mutationFn: (cartItemId: string) => deleteCartItem(cartItemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getCartItems'] })
    },
  })

  const triggerDelete = (cartItemId: string) => {
    mutation.mutate(cartItemId)
  }

  return { ...mutation, triggerDelete }
}
