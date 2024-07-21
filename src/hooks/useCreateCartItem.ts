import { CreateCartItemRequestType } from '@/interfaces/Cart'
import { createCartItem } from '@/services/createCartItem'
import { useMutation } from '@tanstack/react-query'

export const useCreateCartItem = () => {
  const mutation = useMutation({
    mutationKey: [`createCartItem`],
    mutationFn: (payload: CreateCartItemRequestType) => createCartItem(payload),
  })

  const triggerMutation = async (payload: CreateCartItemRequestType) => {
    await mutation.mutateAsync(payload)
  }

  return { ...mutation, triggerMutation }
}
