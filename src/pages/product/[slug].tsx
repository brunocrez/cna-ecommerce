import { useRouter } from 'next/router'
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline'
import { Header } from '@/components/header'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Footer } from '@/components/footer'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="bg-slate-800">
      <Header />
      <div className="h-full py-6 px-3">
        {/* product name & icon actions */}
        <section>
          <p className="text-white text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            debitis.
          </p>
          <div className="flex justify-between my-3 text-white">
            <div className="flex gap-2 items-center cursor-pointer">
              <ChatBubbleLeftIcon className="size-6" />
              <span className="text-sm">(233)</span>
            </div>
            <div className="flex gap-2">
              <ShareIcon className="size-6 cursor-pointer" />
              <HeartIcon className="size-6 cursor-pointer" />
            </div>
          </div>
        </section>
        {/* product pictures */}
        <section className="flex justify-center">
          <Carousel className="w-full max-w-xs" opts={{ loop: true }}>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="right-3 opacity-70 sm:-right-12 sm:opacity-100" />
            <CarouselPrevious className="left-3 opacity-70 sm:-left-12 sm:opacity-100" />
          </Carousel>
        </section>
        {/* price and delivery options */}
        <section className="my-4">
          <div>
            <p className="text-gray-400 line-through">R$ 799,99</p>
            <p className="text-white text-4xl">R$ 599,99</p>
            <p className="text-sm underline text-white mt-3 cursor-pointer">
              Ver outros meios de pagamento
            </p>
          </div>
          <div className="my-6">
            <span className="block mb-3 text-white text-sm font-bold">
              Calcular frete e prazo de entrega
            </span>
            <div className="flex items-center gap-2">
              <Input type="text" placeholder="00000-000" />
              <Button className="bg-white text-slate-800 font-bold hover:bg-slate-600 hover:text-white transition-all duration-300">
                OK
              </Button>
            </div>
            <div className="flex flex-col gap-3 mt-6">
              <Button className="flex gap-3 bg-indigo-800 hover:bg-indigo-700 transition-all duration-300 ">
                <ShoppingCartIcon className="size-6" />
                <span className="text-lg">Comprar</span>
              </Button>
              <Button className="text-md bg-gray-200 text-black hover:bg-white transition-all duration-300">
                Adicionar ao Carrinho
              </Button>
            </div>
          </div>
        </section>

        <Separator className="my-6 bg-slate-700" />

        {/* product info & comments */}
        <section>
          <h2 className="text-white font-bold mb-2">Descrição do Produto</h2>
          <p className="text-white text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            eligendi harum debitis dolorem obcaecati soluta, cumque, enim fugiat
            ipsam delectus iusto dicta tempore autem itaque aliquid? At
            explicabo ipsam quia dolor, est cum expedita dignissimos quos
            officiis eaque optio possimus esse temporibus pariatur, vitae ut
            beatae eos molestias non illum perferendis maxime iste. Sint aut
            ipsa quas voluptas molestiae repellendus.
          </p>

          <Separator className="my-6 bg-slate-700" />

          <h2 className="text-white font-bold mb-4">Avaliação dos Usuários</h2>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Card className="bg-slate-600 border-none mb-6">
              <CardHeader className="py-4">
                <div className="flex items-center gap-3">
                  <UserCircleIcon className="size-6 text-white" />
                  <span className="text-gray-300 font-bold">
                    Samuel Ferreira
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  Produto de excelente qualidade! Super recomendo.
                </p>
              </CardContent>
            </Card>
          ))}
          <Button className="w-full flex items-center justify-between bg-indigo-900 hover:bg-indigo-700 transtion-all duration-300">
            <span>Ver mais avaliações</span>
            <ArrowRightCircleIcon className="size-6" />
          </Button>
        </section>
      </div>
      <Footer />
    </div>
  )
}
