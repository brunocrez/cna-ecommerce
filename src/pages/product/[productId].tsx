import { useEffect } from 'react'
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
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Footer } from '@/components/footer'
import { Container } from '@/components/container'
import { Progress } from '@/components/ui/progress'
import { useProduct } from '@/hooks/useProduct'
import { formatCurrency } from '@/utils/formatCurrency'
import { Skeleton } from '@/components/ui/skeleton'
import { useComments } from '@/hooks/useComments'
import { ZipCode } from '@/components/zip-code'
import { useCheckout } from '@/contexts/CheckoutContext'
import { useAuth } from '@/contexts/AuthContext'
import { useCreateCartItem } from '@/hooks/useCreateCartItem'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'
import { Spinner } from '@/components/spinner'
import { Routes } from '@/utils/routes'
import { useCart } from '@/contexts/CartContext'

export default function ProductPage() {
  const router = useRouter()
  const { productId } = router.query as { productId: string }
  const { data, isLoading } = useProduct(productId, !!productId)
  const { data: comments } = useComments(productId, !!productId)

  const { user } = useAuth()
  const { setCartItems } = useCart()
  const { zipCode, zipError, setZipError, deliveryOption, setProductId } =
    useCheckout()
  const {
    triggerMutation,
    isSuccess,
    isPending,
    data: cartItems,
  } = useCreateCartItem()
  const { toast } = useToast()

  const handleClickPurchase = async () => {
    if (!zipCode || zipError || !deliveryOption) {
      return setZipError('Selecione uma opção de frete para continuar!')
    }

    await triggerMutation({ productId, userId: user.userId, quantity: 1 })
    setProductId(productId)
    router.push(Routes.CHECKOUT)
  }

  const handleClickAddItem = async () => {
    await triggerMutation({ productId, userId: user.userId, quantity: 1 })
  }

  useEffect(() => {
    if (isSuccess) {
      toast({
        description: 'Produto adicionado à sacola com sucesso!',
        duration: 3000,
        className: 'bg-green-600 text-gray-100 text-xl border-green-700',
      })

      setCartItems(cartItems)
    }
  }, [isSuccess, productId])

  return (
    <div className="bg-slate-800">
      <Toaster />
      <Header />
      <div className="h-full py-6 px-3">
        <Container>
          <section>
            {isLoading ? (
              <Skeleton className="w-full lg:max-w-[800px] h-5 mb-6" />
            ) : (
              <p className="text-white text-lg font-bold mb-6">{data?.name}</p>
            )}
          </section>

          <section className="flex justify-center gap-8">
            <div className="w-full">
              {isLoading ? (
                <div className="flex flex-col gap-3">
                  <Skeleton className="w-full max-w-sm h-5" />
                  <Skeleton className="w-full max-w-sm h-80" />
                </div>
              ) : (
                <Carousel
                  className="max-w-xs lg:max-w-sm"
                  opts={{ loop: true }}
                >
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
                          <Card className="border-none">
                            <CardContent className="flex items-center justify-center p-0">
                              <img
                                src={image.url}
                                className="w-full h-80 object-cover overflow-hidden rounded-lg"
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselNext className="right-3 top-[53%] opacity-70" />
                  <CarouselPrevious className="left-3 top-[53%] opacity-70" />
                </Carousel>
              )}
            </div>

            <div className="hidden md:flex flex-col w-full mt-10">
              {isLoading ? (
                <div>
                  <Skeleton className="mb-4 max-w-[184px] h-4" />
                  <Skeleton className="mb-4 max-w-[144px] h-4" />
                  <Skeleton className="mb-4 max-w-[168px] h-8" />
                  <Skeleton className="mb-4 max-w-[184px] h-4" />
                  <Skeleton className="mb-4 max-w-[120px] h-5" />
                </div>
              ) : (
                <>
                  <p className="text-gray-300 text-sm mb-4">
                    Vendido por:{' '}
                    <span className="font-bold underline text-white">
                      Simple E-commerce
                    </span>
                  </p>
                  <p className="text-gray-400 line-through text-2xl">
                    {data?.fullPrice && formatCurrency(data.fullPrice)}
                  </p>

                  <p className="text-white text-4xl">
                    {data?.finalPrice && formatCurrency(data.finalPrice)}
                  </p>

                  <p className="text-sm underline text-white mt-3 cursor-pointer">
                    Ver outros meios de pagamento
                  </p>
                  <p className="text-green-500 font-bold mt-3">Em Estoque!</p>
                </>
              )}
            </div>

            <div className="hidden lg:flex flex-col gap-3 w-full mt-10">
              <Button
                className="flex gap-3 bg-indigo-800 w-full h-12"
                onClick={handleClickPurchase}
              >
                <ShoppingCartIcon className="size-7" />
                <span className="text-lg font-bold">Comprar</span>
              </Button>
              <Button
                className="bg-indigo-800 text-white h-12"
                onClick={handleClickAddItem}
                disabled={isPending}
              >
                {isPending ? (
                  <Spinner />
                ) : (
                  <span className="text-sm font-bold">Adicionar à Sacola</span>
                )}
              </Button>
            </div>
          </section>

          <section className="my-4">
            <div className="md:hidden">
              {isLoading ? (
                <div className="flex flex-col gap-3 w-full">
                  <Skeleton className="max-w-[184px] h-4" />
                  <Skeleton className="max-w-[144px] h-4" />
                  <Skeleton className="max-w-[168px] h-8" />
                  <Skeleton className="max-w-[184px] h-4" />
                  <Skeleton className="max-w-[120px] h-5" />
                </div>
              ) : (
                <>
                  <p className="text-gray-400 line-through">
                    {data?.fullPrice && formatCurrency(data.fullPrice)}
                  </p>
                  <p className="text-white text-4xl">
                    {data?.finalPrice && formatCurrency(data.finalPrice)}
                  </p>
                  <p className="text-sm underline text-white mt-3 cursor-pointer">
                    Ver outros meios de pagamento
                  </p>
                  <p className="text-green-500 font-bold mt-3">Em Estoque!</p>
                </>
              )}
            </div>
            <div className="my-6">
              <ZipCode productId={data?.id || ''} />
              <div className="w-full flex flex-col gap-3 mt-6 md:flex-row md:justify-center lg:hidden">
                <Button
                  className="flex gap-3 bg-indigo-800 w-full h-12"
                  onClick={handleClickPurchase}
                >
                  <ShoppingCartIcon className="size-7" />
                  <span className="text-lg font-bold">Comprar</span>
                </Button>
                <Button
                  className="bg-indigo-800 text-white h-12"
                  onClick={handleClickAddItem}
                >
                  <span className="text-sm font-bold">Adicionar à Sacola</span>
                </Button>
              </div>
            </div>
          </section>

          <Separator className="my-6 bg-slate-700" />

          <section>
            <h2 className="text-white font-bold mb-4 text-lg">
              Descrição do Produto
            </h2>
            <p className="text-white md:text-lg">{data?.description}</p>

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
                      <span className="text-white text-sm mr-2">
                        {5 - index}
                      </span>
                      <StarIcon className="size-4 text-white" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {comments?.map((comment) => (
                  <div key={comment.id} className="w-full max-w-xl mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <UserCircleIcon className="size-8 text-white" />
                      <span className="text-gray-300 font-bold">
                        {comment.user.name}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">
                      {comment.content}
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
