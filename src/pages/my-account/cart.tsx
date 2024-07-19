import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { CartLoader } from '@/components/cart-loader'
import { Container } from '@/components/container'
import { CounterInput } from '@/components/counter-input'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Spinner } from '@/components/spinner'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import { useAuth } from '@/contexts/AuthContext'
import { useCartItems } from '@/hooks/useCartItems'
import { useDeleteCartItem } from '@/hooks/useDeleteCartItem'
import { useUpdateCartItem } from '@/hooks/useUpdateCartItem'
import { formatCurrency } from '@/utils/formatCurrency'
import { ExclamationCircleIcon, TrashIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'
import { Routes } from '@/utils/routes'
import { SummaryCart } from '@/components/summary-cart'

export default function CartPage() {
  const { push } = useRouter()
  const { user } = useAuth()
  const { addItem, removeItem, setCartItems } = useCart()
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
    addItem(cartItemId)
  }

  const handleClickMinus = (cartItemId: string, quantity: number) => {
    triggerUpdate({ cartItemId, quantity })
    setItemClicked(cartItemId)
    removeItem(cartItemId)
  }

  useEffect(() => {
    setCartItems(cartItems)
  }, [cartItems])

  useEffect(() => {
    if (isSuccessDelete) {
      toast({
        description: 'O item foi removida da sacola com sucesso!',
        duration: 3000,
        className: 'bg-green-600 text-gray-100 text-xl border-green-700',
      })
    }
  }, [isSuccessDelete])

  return (
    <div className="bg-slate-800">
      <Toaster />
      <Header />
      <div className={`${height} py-6 px-3`}>
        <Container>
          {cartItems && cartItems.totalItems < 1 ? (
            <div className="flex flex-col gap-5 p-4 items-center mx-auto bg-slate-700 rounded-md text-white w-full max-w-[700px]">
              <ExclamationCircleIcon className="size-12" />
              <span className="text-xl text-center">
                Você não possui nenhum item na sacola no momento!
              </span>
              <Button
                className="bg-indigo-700 hover:bg-indigo-600 mt-2"
                onClick={() => push(Routes.HOME)}
              >
                Buscar Produtos
              </Button>
            </div>
          ) : (
            <>
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
                                {isPendingDelete &&
                                cartItem.id === itemClicked ? (
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
                  <SummaryCart
                    cardTitle={cardTitle}
                    cartItems={cartItems}
                    isLoading={showSkeleton}
                  />
                </div>
              </div>

              <div className="lg:hidden flex flex-col gap-4 w-full">
                <SummaryCart
                  cardTitle={cardTitle}
                  cartItems={cartItems}
                  isLoading={showSkeleton}
                />
              </div>
            </>
          )}
        </Container>
      </div>
      <Footer />
    </div>
  )
}
