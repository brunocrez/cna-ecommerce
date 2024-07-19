import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { Skeleton } from './ui/skeleton'
import { Separator } from './ui/separator'
import { formatCurrency } from '@/utils/formatCurrency'
import { GetCartItemResponseType } from '@/interfaces/Cart'
import { Button } from './ui/button'

type SummaryCartType = {
  isLoading: boolean
  cardTitle: string
  cartItems: GetCartItemResponseType | undefined
}

export function SummaryCart({
  isLoading,
  cardTitle,
  cartItems,
}: SummaryCartType) {
  return (
    <>
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
            <span className="text-white">
              {cartItems && formatCurrency(cartItems.totalPrice)}
            </span>
          )}
        </div>
        <Separator className="bg-slate-600 my-4" />
        <div className="flex justify-between">
          <span>Frete</span>
          {isLoading ? (
            <Skeleton className="w-24 h-6" />
          ) : (
            <span className="text-white">
              {cartItems && formatCurrency(cartItems.totalFreight)}
            </span>
          )}
        </div>
        <Separator className="bg-slate-600 my-4" />
        <div className="flex justify-between">
          <span>Total</span>
          {isLoading ? (
            <Skeleton className="w-24 h-6" />
          ) : (
            <span className="text-lg font-bold text-green-600">
              {cartItems && formatCurrency(cartItems.total)}
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
    </>
  )
}
