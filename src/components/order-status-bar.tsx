import {
  CheckCircleIcon,
  PaperAirplaneIcon,
  ShoppingCartIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

export function OrderStatusBar() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex text-white">
        <div className="flex items-center w-full">
          <ShoppingCartIcon className="size-6" />
          <div className="w-full h-[1px] mx-1 bg-gray-200 relative after:block after:absolute after:h-[2px] after:top-0 after:bg-green-800"></div>
        </div>
        <div className="flex items-center w-full">
          <PaperAirplaneIcon className="size-6" />
          <div className="w-full h-[1px] mx-1 bg-gray-200 relative after:block after:absolute after:h-[2px] after:top-0 after:bg-green-800"></div>
        </div>
        <div className="flex items-center w-full">
          <TruckIcon className="size-6" />
          <div className="w-full h-[1px] mx-1 bg-gray-200 relative after:block after:absolute after:h-[2px] after:top-0 after:bg-green-800"></div>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon className="size-5 sm:size-6" />
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 text-white text-sm">
        <p>
          <span className="font-bold mr-1">Status:</span>
          Pedido criado - 17/02/2024 13:28
        </p>
      </div>
    </div>
  )
}
