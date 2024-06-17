import { Skeleton } from './ui/skeleton'

export function HomeSectionLoader() {
  return (
    <>
      {/* 1 skeleton for screens smaller than 640px */}
      <div className="sm:hidden">
        <Skeleton className="h-96 w-full max-w-sm mb-4 mx-auto" />
      </div>

      {/* 3 skeletons for screens bigger than 640px and smaller than 1240px */}
      <div className="hidden sm:flex justify-between gap-4 xl:hidden">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Skeleton key={idx} className="h-80 w-full" />
        ))}
      </div>

      {/* 5 skeletons for screens bigger than 1240px */}
      <div className="hidden xl:flex justify-between gap-4">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Skeleton key={idx} className="h-80 w-full" />
        ))}
      </div>
    </>
  )
}
