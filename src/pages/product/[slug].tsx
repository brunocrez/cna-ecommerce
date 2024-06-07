import { useRouter } from 'next/router'
import {
  ChatBubbleLeftIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ArrowRightCircleIcon,
  StarIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
} from '@heroicons/react/24/outline'
import { Header } from '@/components/header'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Footer } from '@/components/footer'
import { Container } from '@/components/container'
import { Progress } from '@/components/ui/progress'
import { useProduct } from '@/hooks/useProduct'

export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query as { slug: string }

  const { data } = useProduct(slug)

  console.log({ data })

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
                  {data?.images.map((image) => (
                    <CarouselItem key={image.url}>
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-6 lg:p-0">
                            <img src={image.url} />
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
                  Simple E-commerce
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

          <section>
            <h2 className="text-white font-bold mb-4 text-lg">
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
              voluptatum aperiam. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Facilis, omnis illo perspiciatis possimus
              tenetur fugit, quis nulla, suscipit modi sequi culpa rem earum
              itaque ullam doloribus! Blanditiis vitae velit reprehenderit ipsum
              ducimus provident nihil quas, dolorem eum dicta molestiae, ad,
              aspernatur perferendis inventore dolores ea nostrum iure
              recusandae eos quae ullam! Facilis dolorum dicta repudiandae ipsa
              iste possimus nihil necessitatibus perspiciatis voluptatum error
              quam voluptatem repellendus, consectetur pariatur distinctio
              quibusdam laboriosam aspernatur illo ipsam. Quae distinctio aut
              blanditiis reiciendis maxime itaque architecto fugit eaque ullam
              accusamus voluptate vero quia harum quas nisi explicabo, dolores
              neque excepturi, ipsa similique iure doloribus.
            </p>

            <Separator className="my-6 bg-slate-700" />

            <h2 className="text-white font-bold mb-4 text-lg">
              Avaliação dos Usuários
            </h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="grid grid-cols-2 auto-rows-min gap-y-6 w-full max-w-xs">
                <div className="">
                  <span className="text-5xl text-indigo-600 font-bold">
                    4.7
                  </span>
                  <span className="text-2xl text-indigo-600">/5</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-white text-sm">788 avaliações</span>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <StarIcon key={idx} className="size-5 text-white" />
                    ))}
                  </div>
                </div>
                <div className="col-span-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center">
                      <Progress
                        value={56}
                        className="mr-4 bg-white h-2"
                        indicatorColor="bg-indigo-700"
                      />
                      <span className="text-white text-sm mr-2">5</span>
                      <StarIcon className="size-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {Array.from({ length: 3 }).map((_, idx) => (
                  <div key={idx} className="w-full max-w-xl mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <UserCircleIcon className="size-8 text-white" />
                      <span className="text-gray-300 font-bold">
                        Samuel Ferreira
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-2">
                      Produto de excelente qualidade! Super recomendo. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Iste
                      aut quidem natus necessitatibus totam debitis quae fuga
                      doloribus omnis animi perspiciatis optio, consectetur esse
                      blanditiis ratione deserunt. Est ducimus, libero assumenda
                      numquam quis consequatur facilis voluptatem beatae
                      reprehenderit similique illum porro ipsum quas laborum
                      incidunt necessitatibus architecto velit ipsa provident
                      repellendus sapiente laboriosam nam. Maiores vitae
                      voluptates, mollitia, minima laborum consectetur corporis
                      deleniti modi obcaecati ullam, voluptatum similique.
                      Asperiores quos odit optio voluptatem iste amet, cum
                      voluptates deserunt ratione sed natus in necessitatibus
                      commodi dolorum ipsum sapiente aliquam facere magni
                      delectus fugit sit vero illo ad suscipit! Eius, saepe
                      iusto?
                    </p>
                    <div className="flex gap-1">
                      <Button className="text-gray-300 flex items-center gap-4">
                        <HandThumbUpIcon className="size-4" />
                      </Button>
                      <Button className="text-gray-300 flex items-center gap-4">
                        <HandThumbDownIcon className="size-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                <Button className="w-full max-w-[240px] flex items-center justify-between bg-indigo-900 hover:bg-indigo-700 transtion-all duration-300">
                  <span>Ver mais avaliações</span>
                  <ArrowRightCircleIcon className="size-6" />
                </Button>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
