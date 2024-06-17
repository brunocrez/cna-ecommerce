import { useQuery } from '@tanstack/react-query'
import { getCommentsByProductId } from '@/services/getCommentsByProductId'

export const useComments = (id: string, enabled: boolean) => {
  return useQuery({
    queryKey: [`getComments-${id}`],
    queryFn: () => getCommentsByProductId(id),
    enabled,
    staleTime: 45 * 60 * 1000, // 45 mins
  })
}
