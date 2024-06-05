import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'

interface IHomeSection {
  icon: React.ElementType
  title: string
  buttonText: string
}

export function HomeSection({ icon: Icon, title, buttonText }: IHomeSection) {
  return (
    <section className="lg:max-w-[1536px] mx-auto py-6 px-3">
      <div className="flex items-center justify-between text-gray-300 mb-4">
        <div className="flex items-center gap-3">
          <Icon className="size-6" />
          <h2 className="font-bold sm:text-xl">{title}</h2>
        </div>
        <Button className="hidden sm:flex bg-transparent uppercase tracking-widest items-center gap-3 font-bold px-0 hover:bg-transparent">
          <span>ver todos</span>
          <ChevronRightIcon className="size-5" />
        </Button>
      </div>

      <Carousel
        className="w-full mx-auto max-w-xs sm:max-w-[1536px] mb-4"
        opts={{ loop: true }}
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="sm:basis-1/3 xl:basis-1/5">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="right-2 opacity-70" />
        <CarouselPrevious className="left-2 opacity-70" />
      </Carousel>

      <Button className="w-full flex mx-auto max-w-xs sm:hidden">
        {buttonText}
      </Button>
    </section>
  )
}
