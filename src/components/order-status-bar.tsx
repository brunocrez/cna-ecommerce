import { colorCurrentStep } from '@/utils/colorCurrentStep'
import {
  CheckCircleIcon,
  PaperAirplaneIcon,
  ShoppingCartIcon,
  TruckIcon,
} from '@heroicons/react/24/outline'

type OrderStatusBarProps = {
  currStep: string
  date: string | undefined
}

export function OrderStatusBar({ currStep, date }: OrderStatusBarProps) {
  const step = colorCurrentStep(currStep)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex text-white">
        <div className="flex items-center w-full">
          <ShoppingCartIcon
            className={`size-6 ${step < 1 ? 'text-orange-600' : ''}`}
          />
          <div className="w-full h-[1px] mx-1 bg-gray-200 relative after:block after:absolute after:h-[2px] after:top-0"></div>
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
          Pedido criado - {date}
        </p>
      </div>
    </div>
  )
}
