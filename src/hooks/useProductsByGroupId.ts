import { useQuery } from '@tanstack/react-query'
import { getProductsByGroupId } from '@/services/getProductsByGroupId'

export const useProductsByGroupId = (groupId: number) => {
  return useQuery({
    queryKey: [`getProductsByGroupId-${groupId}`],
    queryFn: () => getProductsByGroupId(groupId),
  })
}
