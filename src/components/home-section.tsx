import { useRouter } from 'next/router'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card, CardContent, CardFooter } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Skeleton } from './ui/skeleton'
import { useProductsByGroupId } from '@/hooks/useProductsByGroupId'
import { HomeSectionLoader } from './home-section-loader'

interface IHomeSectionProps {
  icon: React.ElementType
  title: string
  buttonText: string
  groupId: number
}

export function HomeSection({
  icon: Icon,
  title,
  buttonText,
  groupId,
}: IHomeSectionProps) {
  const { push } = useRouter()
  const { data, isLoading } = useProductsByGroupId(groupId)

  return (
    <section className="lg:max-w-[1536px] mx-auto py-6 px-3">
      <div className="flex items-center justify-between text-gray-300 mb-4">
        <div className="flex items-center gap-3">
          <Icon className="size-6" />
          <h2 className="font-bold sm:text-xl">{title}</h2>
        </div>
        <Button
          disabled={isLoading}
          className="hidden sm:flex bg-transparent uppercase tracking-widest items-center gap-3 font-bold px-0 hover:bg-transparent"
        >
          <span>ver todos</span>
          <ChevronRightIcon className="size-5" />
        </Button>
      </div>

      {isLoading && <HomeSectionLoader />}

      <Carousel
        className="w-full mx-auto max-w-sm sm:max-w-[1536px] mb-4"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {data?.map((product) => {
            return (
              <CarouselItem
                key={product.id}
                className="sm:basis-1/3 xl:basis-1/5 cursor-pointer"
                onClick={() => push(`/product/${product.id}`)}
              >
                <div className="p-1">
                  <Card className="border-none rounded-lg">
                    <CardContent className="flex items-center justify-center p-0 rounded-lg overflow-hidden">
                      <img
                        src={product.images[0].url}
                        className="w-full h-80 object-cover"
                      />
                    </CardContent>
                    <CardFooter className="p-1">
                      <span className="text-gray-800 font-bold text-sm text-ellipsis line-clamp-2">
                        {product.name}
                      </span>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
        {data && (
          <>
            <CarouselNext className="right-2 opacity-70" />
            <CarouselPrevious className="left-2 opacity-70" />
          </>
        )}
      </Carousel>

      {isLoading ? (
        <Skeleton className="w-full max-w-sm h-10 sm:hidden mx-auto" />
      ) : (
        <Button className="w-full flex mx-auto max-w-sm sm:hidden">
          {buttonText}
        </Button>
      )}
    </section>
  )
}
