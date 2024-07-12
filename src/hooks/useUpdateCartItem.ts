import {
  GetCartItemResponseType,
  UpdateCartItemRequestType,
} from '@/interfaces/Cart'
import { updateCartItem } from '@/services/updateCartItem'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: [`updateCartItem`],
    mutationFn: (payload: UpdateCartItemRequestType) => updateCartItem(payload),
    onMutate: async (payload: UpdateCartItemRequestType) => {
      await queryClient.cancelQueries({ queryKey: ['getCartItems'] })

      const previousCart = queryClient.getQueryData<GetCartItemResponseType>([
        'getCartItems',
      ])

      if (previousCart) {
        queryClient.setQueryData<GetCartItemResponseType>(
          ['getCartItems'],
          (old: GetCartItemResponseType | undefined) => {
            const items =
              old?.items.map((cartItem) =>
                cartItem.id === payload.cartItemId
                  ? { ...cartItem, quantity: payload.quantity }
                  : cartItem,
              ) ?? []

            return {
              ...previousCart,
              items,
            }
          },
        )
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['getCartItems'] })
    },
  })

  const triggerUpdate = (payload: UpdateCartItemRequestType) => {
    mutation.mutate(payload)
  }

  return { ...mutation, triggerUpdate }
}
