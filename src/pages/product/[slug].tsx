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
import { Container } from '@/components/container'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <div className="bg-slate-800">
      <Header />
      <div className="h-full py-6 px-3">
        <Container>
          <section>
            <p className="text-white text-lg font-bold mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              debitis.
            </p>
          </section>

          <section className="flex justify-center gap-8">
            <div className="w-full">
              <Carousel className="max-w-xs lg:max-w-sm" opts={{ loop: true }}>
                <div className="flex justify-between mb-4 text-white">
                  <div className="flex gap-2 items-center cursor-pointer">
                    <ChatBubbleLeftIcon className="size-6" />
                    <span className="text-sm">(233)</span>
                  </div>
                  <div className="flex gap-2">
                    <ShareIcon className="size-6 cursor-pointer" />
                    <HeartIcon className="size-6 cursor-pointer" />
                  </div>
                </div>
                <CarouselContent>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6 lg:p-0">
                            <span className="text-xl font-semibold">
                              Foto {index + 1}
                            </span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselNext className="right-3 top-[53%] opacity-70" />
                <CarouselPrevious className="left-3 top-[53%] opacity-70" />
              </Carousel>
            </div>

            <div className="hidden md:flex flex-col w-full mt-10">
              <p className="text-gray-300 text-sm mb-4">
                Vendido por:{' '}
                <span className="font-bold underline text-white">
                  Simple Ecommerce
                </span>
              </p>
              <p className="text-gray-400 line-through text-2xl">R$ 799,99</p>
              <p className="text-white text-4xl">R$ 599,99</p>
              <p className="text-sm underline text-white mt-3 cursor-pointer">
                Ver outros meios de pagamento
              </p>
              <p className="text-green-500 font-bold mt-3">Em Estoque!</p>
            </div>

            <div className="hidden lg:flex flex-col gap-3 w-full mt-10">
              <Button className="flex gap-3 bg-indigo-800 w-full h-12">
                <ShoppingCartIcon className="size-7" />
                <span className="text-lg font-bold">Comprar</span>
              </Button>
              <Button className="bg-indigo-800 text-white h-12">
                <span className="text-sm font-bold">Adicionar ao Carrinho</span>
              </Button>
            </div>
          </section>

          <section className="my-4">
            <div className="md:hidden">
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
                <Input
                  type="text"
                  placeholder="00000-000"
                  className="w-full sm:max-w-48"
                />
                <Button className="bg-white text-slate-800 font-bold">
                  OK
                </Button>
              </div>
              <div className="w-full flex flex-col gap-3 mt-6 md:flex-row md:justify-center lg:hidden">
                <Button className="flex gap-3 bg-indigo-800 w-full h-12">
                  <ShoppingCartIcon className="size-7" />
                  <span className="text-lg font-bold">Comprar</span>
                </Button>
                <Button className="bg-indigo-800 text-white h-12">
                  <span className="text-sm font-bold">
                    Adicionar ao Carrinho
                  </span>
                </Button>
              </div>
            </div>
          </section>

          <Separator className="my-6 bg-slate-700" />

          {/* product info & comments */}
          <section>
            <h2 className="text-white font-bold mb-2 text-lg">
              Descrição do Produto
            </h2>
            <p className="text-white md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              eligendi harum debitis dolorem obcaecati soluta, cumque, enim
              fugiat ipsam delectus iusto dicta tempore autem itaque aliquid? At
              explicabo ipsam quia dolor, est cum expedita dignissimos quos
              officiis eaque optio possimus esse temporibus pariatur, vitae ut
              beatae eos molestias non illum perferendis maxime iste. Sint aut
              ipsa quas voluptas molestiae repellendus. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Ipsam, modi eius blanditiis
              eaque culpa iure quis, quaerat, fugit tenetur saepe odit ut illo
              cupiditate porro. Reprehenderit maiores nisi facere numquam soluta
              animi voluptate possimus, ratione dolore autem veniam quibusdam
              sequi? Laborum reprehenderit a dolores cumque repellat quam odio,
              voluptatum aperiam.
            </p>

            <Separator className="my-6 bg-slate-700" />

            <h2 className="text-white font-bold mb-4">
              Avaliação dos Usuários
            </h2>
            {Array.from({ length: 3 }).map((_, idx) => (
              <Card key={idx} className="bg-slate-600 border-none mb-6">
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
        </Container>
      </div>
      <Footer />
    </div>
  )
}
