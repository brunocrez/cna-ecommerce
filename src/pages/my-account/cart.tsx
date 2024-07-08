import { CartLoader } from '@/components/cart-loader'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Skeleton } from '@/components/ui/skeleton'
import { useAuth } from '@/contexts/AuthContext'
import { useCartItems } from '@/hooks/useCartItems'
import { formatCurrency } from '@/utils/formatCurrency'
import {
  DocumentTextIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'

export default function CartPage() {
  const { user } = useAuth()
  const { data, isLoading } = useCartItems(user?.userId, !!user.userId)

  const cardTitle =
    data && data.totalItems < 2 ? '1 item' : `${data?.totalItems} itens`

  return (
    <div className="bg-slate-800">
      <Header />
      <div className="h-screen py-6 px-3">
        <Container>
          <div className="flex gap-3">
            <div className="flex-1">
              {isLoading ? (
                <CartLoader />
              ) : (
                <>
                  {data?.items.map((cartItem) => {
                    return (
                      <div className="bg-slate-700 rounded-md p-4 mb-4">
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
                          <div className="flex items-center gap-2 lg:ml-auto mr-8">
                            <Button
                              className="bg-transparent hover:bg-transparent px-0"
                              size="sm"
                            >
                              <MinusCircleIcon className="size-6" />
                            </Button>
                            <span className="text-gray-300">1</span>
                            <Button
                              className="bg-transparent hover:bg-transparent px-0"
                              size="sm"
                            >
                              <PlusCircleIcon className="size-6" />
                            </Button>
                          </div>
                          <Button size="sm">
                            <span className="mr-2">Excluir</span>
                            <TrashIcon className="size-5 text-white" />
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
                  {isLoading ? (
                    <Skeleton className="h-7 w-full max-w-[160px]" />
                  ) : (
                    <h2 className="font-bold text-xl">Resumo ({cardTitle})</h2>
                  )}
                </div>
                <Separator className="bg-slate-600 my-4" />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  {isLoading ? (
                    <Skeleton className="w-24 h-6" />
                  ) : (
                    <span className="text-lg font-bold text-green-600">
                      {data && formatCurrency(data.totalPrice)}
                    </span>
                  )}
                </div>
              </div>

              <Button
                onClick={() => {}}
                disabled={isLoading}
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
              {isLoading ? (
                <Skeleton className="h-7 w-full max-w-[160px]" />
              ) : (
                <h2 className="font-bold text-xl">Resumo ({cardTitle})</h2>
              )}
            </div>

            <Separator className="bg-slate-600 my-4" />

            <div className="flex items-center justify-between text-gray-200">
              <h2>Subtotal</h2>
              {isLoading ? (
                <Skeleton className="w-24 h-6" />
              ) : (
                <span className="text-green-600 font-bold text-lg">
                  {data && formatCurrency(data.totalPrice)}
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
