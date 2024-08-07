import { useEffect } from 'react'
import { useRouter } from 'next/router'
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
  DocumentTextIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/footer'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/container'
import { Input } from '@/components/ui/input'
import { useCreateOrder } from '@/hooks/useCreateOrder'
import { Skeleton } from '@/components/ui/skeleton'
import { formatCurrency } from '@/utils/formatCurrency'
import { DeliveryAddress } from '@/components/delivery-address'
import { PaymentCard } from '@/components/payment-card'
import { useCheckout } from '@/contexts/CheckoutContext'
import { LoggedUserType } from '@/interfaces/User'
import { useUpdateOrder } from '@/hooks/useUpdateOrder'
import { useAuth } from '@/contexts/AuthContext'
import { OrderStatus } from '@/utils/orderStatus'
import { Routes } from '@/utils/routes'

export default function CheckoutPage() {
  const { push } = useRouter()
  const { product, setOrderResponse, deliveryOption } = useCheckout()
  const { user } = useAuth()

  const createOrder = {
    productId: product?.id ?? '',
    quantity: 1,
    freight: deliveryOption?.price!,
  }

  const { data, isPending } = useCreateOrder(
    user ?? ({} as LoggedUserType),
    [createOrder] ?? [],
    user.addresses[0].id ?? '',
    !!user.userId && !!product?.id,
  )

  const { triggerMutation, data: orderResponse, isSuccess } = useUpdateOrder()

  function handleFinishOrder() {
    triggerMutation({
      userId: user.userId,
      status: OrderStatus.ACCEPTED,
    })
  }

  useEffect(() => {
    if (isSuccess && orderResponse) {
      setOrderResponse(orderResponse)
      push(Routes.FINISH_ORDER)
    }
  }, [isSuccess, orderResponse])

  return (
    <div className="bg-slate-800">
      <Header />
      <div className="h-full py-6 px-3">
        <Container>
          <section className="flex justify-between gap-6">
            <div className="w-full">
              {/* card pedidos */}
              <div className="bg-slate-700 rounded-md p-6 mb-6">
                <div className="flex items-center gap-2 text-gray-300 mb-6 ">
                  <CheckCircleIcon className="size-7" />
                  <h2 className="text-xl font-bold">Revisão do Pedido</h2>

                  {isPending ? (
                    <Skeleton className="hidden sm:block w-[270px] h-[36px] ml-auto" />
                  ) : (
                    <Button
                      className="hidden sm:flex ml-auto uppercase items-center p-4 text-xs tracking-widest"
                      size={'sm'}
                    >
                      <TrashIcon className="size-5 mr-2" />
                      <span className="hidden md:block">
                        remover todos os produtos
                      </span>
                      <span className="md:hidden">remover todos</span>
                    </Button>
                  )}
                </div>

                {isPending ? (
                  <div className="mb-4">
                    <div className="flex gap-4 mb-3">
                      <Skeleton className="w-24 h-24" />
                      <div className="flex flex-col gap-2 flex-1">
                        <Skeleton className="w-full max-w-[600px] h-[20px]" />
                        <Skeleton className="w-full max-w-28 h-7" />
                        <Skeleton className="w-full max-w-20 h-8" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {data?.orderItems.map((orderItem) => (
                      <div className="mb-4" key={orderItem.id}>
                        <div className="flex gap-4 mb-3">
                          <img
                            className="size-24 rounded-md"
                            src={orderItem.Product.images[0].url}
                            alt="imagem pedido"
                            height={100}
                            width={70}
                          />
                          <div className="flex flex-col gap-1 overflow-hidden">
                            <span className="text-white text-xs sm:text-sm text-ellipsis line-clamp-2">
                              {orderItem.Product.name}
                            </span>
                            <div className="flex items-center">
                              <span className="text-gray-200 text-xs sm:text-xl font-bold">
                                {formatCurrency(orderItem.Product.finalPrice)}
                              </span>
                              <Button className="ml-auto bg-transparent hover:bg-transparent">
                                <TrashIcon className="size-5 sm:size-6 text-red-500" />
                              </Button>
                            </div>

                            <div className="flex items-center gap-2">
                              <Button
                                className="bg-transparent hover:bg-transparent px-0"
                                size={'sm'}
                              >
                                <MinusCircleIcon className="size-6" />
                              </Button>
                              <span className="text-gray-300">1</span>
                              <Button
                                className="bg-transparent hover:bg-transparent px-0"
                                size={'sm'}
                              >
                                <PlusCircleIcon className="size-6" />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Separator className="bg-slate-700 mb-6" />
                      </div>
                    ))}
                  </>
                )}
              </div>

              {/* card cupom */}
              <div className="bg-slate-700 rounded-md p-6 mb-6 hidden lg:block">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                  <Input
                    type="text"
                    className="w-full lg:w-2/3 h-10"
                    placeholder="Digite o código do cupom"
                  />
                  <Button className="w-full lg:w-1/3" size={'lg'}>
                    Aplicar Cupom
                  </Button>
                </div>
              </div>
            </div>

            {/* cards laterais */}
            <div className="hidden lg:flex flex-col gap-4 w-full min-w-96 max-w-96">
              {/* card resumo do pedido */}
              <div className="bg-slate-700 p-6 rounded-md text-white">
                <div className="flex items-center text-gray-300 gap-2 mb-6">
                  <DocumentTextIcon className="size-6" />
                  <h2 className="font-bold text-xl">Resumo</h2>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  {isPending ? (
                    <Skeleton className="w-24 h-6" />
                  ) : (
                    <span>
                      {data && formatCurrency(data?.orderItems[0].price)}
                    </span>
                  )}
                </div>
                <Separator className="bg-slate-600 my-4" />
                <div className="flex justify-between">
                  <span>Frete</span>
                  {isPending ? (
                    <Skeleton className="w-20 h-6" />
                  ) : (
                    <span>
                      {data && formatCurrency(data.orderItems[0].freight)}
                    </span>
                  )}
                </div>
                <Separator className="bg-slate-600 my-4" />
                <div className="flex justify-between">
                  <span>Total</span>
                  {isPending ? (
                    <Skeleton className="w-32 h-7" />
                  ) : (
                    <span className="text-green-500 font-bold text-xl">
                      {data && formatCurrency(data.order.total)}
                    </span>
                  )}
                </div>
              </div>

              {/* card pagamento */}
              <PaymentCard />

              {/* card entrega */}
              <DeliveryAddress />

              <Button
                onClick={handleFinishOrder}
                disabled={isPending}
                size="lg"
                className="bg-green-600 font-bold text-xl"
              >
                Finalizar Pedido
              </Button>
            </div>
          </section>

          <section className="mb-6 lg:hidden">
            <DeliveryAddress />
          </section>
          <section className="mb-6 lg:hidden">
            <PaymentCard />
          </section>

          {/* card cupom */}
          <div className="bg-slate-700 rounded-md p-6 mb-6 lg:hidden">
            <div className="flex flex-col lg:flex-row items-center gap-4">
              <Input
                type="text"
                className="w-full lg:w-2/3 h-10"
                placeholder="Digite o código do cupom"
              />
              <Button className="w-full lg:w-1/3" size={'lg'}>
                Aplicar Cupom
              </Button>
            </div>
          </div>

          <Separator className="bg-slate-700 mb-6 lg:hidden" />

          {/* total price */}
          <section className="lg:hidden">
            <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
              <h2>Subtotal</h2>
              {isPending ? (
                <Skeleton className="w-20 h-5" />
              ) : (
                <span>{data && formatCurrency(data.order.subTotal)}</span>
              )}
            </div>
            <div className="flex items-center justify-between text-gray-400 text-sm mb-2">
              <h2>Frete</h2>
              {isPending ? (
                <Skeleton className="w-12 h-5" />
              ) : (
                <span>{data && formatCurrency(data.order.totalFreight)}</span>
              )}
            </div>
            <div className="flex items-center justify-between text-gray-200 text-lg font-bold">
              <h2>Total</h2>
              {isPending ? (
                <Skeleton className="w-24 h-6" />
              ) : (
                <span className="text-green-600">
                  {data && formatCurrency(data.order.total)}
                </span>
              )}
            </div>
            <Button
              onClick={handleFinishOrder}
              disabled={isPending}
              className="w-full bg-indigo-700 mt-5"
            >
              Finalizar Pedido
            </Button>
          </section>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
