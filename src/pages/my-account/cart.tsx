import { useEffect, useState } from 'react'
import { CartLoader } from '@/components/cart-loader'
import { Container } from '@/components/container'
import { CounterInput } from '@/components/counter-input'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Spinner } from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/contexts/AuthContext'
import { useCartItems } from '@/hooks/useCartItems'
import { useDeleteCartItem } from '@/hooks/useDeleteCartItem'
import { useUpdateCartItem } from '@/hooks/useUpdateCartItem'
import { formatCurrency } from '@/utils/formatCurrency'
import { DocumentTextIcon, TrashIcon } from '@heroicons/react/24/outline'

export default function CartPage() {
  const { user } = useAuth()
  const { data: cartItems, isLoading } = useCartItems(
    user?.userId,
    !!user.userId,
  )
  const { toast } = useToast()
  const {
    isPending: isPendingDelete,
    isSuccess: isSuccessDelete,
    triggerDelete,
  } = useDeleteCartItem()
  const { isPending: isPendingUpdate, triggerUpdate } = useUpdateCartItem()
  const [itemClicked, setItemClicked] = useState<string>('')

  const cardTitle =
    cartItems && cartItems.totalItems < 2
      ? '1 item'
      : `${cartItems?.totalItems} itens`

  const height =
    cartItems && cartItems?.items.length < 4 ? 'h-screen' : 'h-full'

  const showSkeleton = isLoading || isPendingDelete || isPendingUpdate

  const handleClickPlus = (cartItemId: string, quantity: number) => {
    triggerUpdate({ cartItemId, quantity })
    setItemClicked(cartItemId)
  }

  const handleClickMinus = (cartItemId: string, quantity: number) => {
    triggerUpdate({ cartItemId, quantity })
    setItemClicked(cartItemId)
  }

  useEffect(() => {
    if (isSuccessDelete) {
      toast({
        description: 'O item foi removida da sacola com sucesso!',
        duration: 3000,
      })
    }
  }, [isSuccessDelete])

  return (
    <div className="bg-slate-800">
      <Toaster />
      <Header />
      <div className={`${height} py-6 px-3`}>
        <Container>
          <div className="flex gap-3">
            <div className="flex-1">
              {isLoading ? (
                <CartLoader />
              ) : (
                <>
                  {cartItems?.items.map((cartItem) => {
                    return (
                      <div
                        key={cartItem.productId}
                        className="bg-slate-700 rounded-md p-4 mb-4"
                      >
                        <div className="flex gap-2 mb-5">
                          <img
                            src={cartItem.product.images[0].url}
                            className="rounded-md"
                            alt="foto do produto"
                            width={100}
                            height={100}
                          />
                          <div className="text-white flex flex-col gap-2">
                            <p className="text-sm text-ellipsis line-clamp-2">
                              {cartItem.product.name}
                            </p>
                            <p className="text-lg font-bold">
                              {formatCurrency(cartItem.product.finalPrice)}
                            </p>
                            <p className="text-xs font-bold text-green-600">
                              Em estoque!
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <CounterInput
                            onClickPlus={() =>
                              handleClickPlus(
                                cartItem.id,
                                cartItem.quantity + 1,
                              )
                            }
                            onClickMinus={() =>
                              handleClickMinus(
                                cartItem.id,
                                cartItem.quantity - 1,
                              )
                            }
                            value={cartItem.quantity}
                            isLoading={
                              isPendingUpdate && cartItem.id === itemClicked
                            }
                          />
                          <Button
                            size="sm"
                            onClick={() => triggerDelete(cartItem.id)}
                            disabled={isPendingDelete}
                          >
                            <span className="mr-2">Excluir</span>
                            {isPendingDelete && cartItem.id === itemClicked ? (
                              <Spinner size="sm" />
                            ) : (
                              <TrashIcon className="size-5 text-white" />
                            )}
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </>
              )}
            </div>

            <div className="hidden lg:flex flex-col gap-4 w-full min-w-96 max-w-96">
              <div className="bg-slate-700 p-6 rounded-md text-white">
                <div className="flex items-center text-gray-300 gap-2 mb-6">
                  <DocumentTextIcon className="size-6" />
                  {showSkeleton ? (
                    <Skeleton className="h-7 w-full max-w-[160px]" />
                  ) : (
                    <h2 className="font-bold text-xl">Resumo ({cardTitle})</h2>
                  )}
                </div>
                <Separator className="bg-slate-600 my-4" />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  {showSkeleton ? (
                    <Skeleton className="w-24 h-6" />
                  ) : (
                    <span className="text-lg font-bold text-green-600">
                      {cartItems && formatCurrency(cartItems.totalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <Button
                onClick={() => {}}
                disabled={showSkeleton}
                size="lg"
                className="bg-green-600 font-bold text-lg"
              >
                Continuar Compra
              </Button>
            </div>
          </div>

          <div className="bg-slate-700 rounded-md p-4 text-white lg:hidden">
            <div className="flex items-center text-gray-300 gap-2 mb-6">
              <DocumentTextIcon className="size-6" />
              {showSkeleton ? (
                <Skeleton className="h-7 w-full max-w-[160px]" />
              ) : (
                <h2 className="font-bold text-xl">Resumo ({cardTitle})</h2>
              )}
            </div>

            <Separator className="bg-slate-600 my-4" />

            <div className="flex items-center justify-between text-gray-200">
              <h2>Subtotal</h2>
              {showSkeleton ? (
                <Skeleton className="w-24 h-6" />
              ) : (
                <span className="text-green-600 font-bold text-lg">
                  {cartItems && formatCurrency(cartItems.totalPrice)}
                </span>
              )}
            </div>
          </div>

          <Button className="mt-6 w-full bg-green-600 lg:hidden">
            Continuar Compra
          </Button>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
