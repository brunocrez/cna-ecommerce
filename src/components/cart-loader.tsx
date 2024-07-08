import { Skeleton } from './ui/skeleton'

export function CartLoader() {
  return (
    <>
      <div className="bg-slate-700 rounded-md p-4 mb-4">
        <div className="flex gap-2 mb-5">
          <Skeleton className="w-28 h-28" />
          <div className="flex-1">
            <Skeleton className="w-full max-w-[720px] h-10 mb-3" />
            <Skeleton className="h-7 w-full max-w-[120px] mb-3" />
            <Skeleton className="h-4 w-full max-w-[100px]" />
          </div>
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-7 w-full max-w-24 lg:ml-auto mr-3" />
          <Skeleton className="h-7 w-full max-w-24" />
        </div>
      </div>
      <div className="bg-slate-700 rounded-md p-4 mb-4">
        <div className="flex gap-2 mb-5">
          <Skeleton className="w-28 h-28" />
          <div className="flex-1">
            <Skeleton className="w-full max-w-[720px] h-10 mb-3" />
            <Skeleton className="h-7 w-full max-w-[120px] mb-3" />
            <Skeleton className="h-4 w-full max-w-[100px]" />
          </div>
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-7 w-full max-w-24 lg:ml-auto mr-3" />
          <Skeleton className="h-7 w-full max-w-24" />
        </div>
      </div>
    </>
  )
}
