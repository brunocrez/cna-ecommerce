import { useQuery } from '@tanstack/react-query'
import { getCommentsByProductId } from '@/services/getCommentsByProductId'

export const useComments = (id: string, enabled: boolean) => {
  return useQuery({
    queryKey: ['getComments'],
    queryFn: () => getCommentsByProductId(id),
    enabled,
  })
}
