import { OrderStatusString, OrderStepStatus } from '@/utils/orderStatus'
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
  const stepNumber = OrderStepStatus[currStep]

  const getBarColor = (n: number) => {
    return n <= stepNumber ? 'bg-green-500' : 'bg-gray-200'
  }

  const setIconColor = (n: number) => {
    return n <= stepNumber ? 'text-green-500' : 'text-gray-200'
  }

  const setBarColor = (n: number) =>
    `w-full h-[2px] mx-1 ${getBarColor(
      n,
    )} relative after:block after:absolute after:h-[2px] after:top-0`

  return (
    <div className="flex flex-col gap-4">
      <div className="flex text-white">
        <div className="flex items-center w-full">
          <ShoppingCartIcon
            className={`size-6 ${setIconColor(OrderStepStatus.ACCEPTED)}`}
          />
          <div className={setBarColor(OrderStepStatus.SENT)}></div>
        </div>
        <div className="flex items-center w-full">
          <PaperAirplaneIcon
            className={`size-6 ${setIconColor(OrderStepStatus.SENT)}`}
          />
          <div className={setBarColor(OrderStepStatus.IN_TRANSIT)}></div>
        </div>
        <div className="flex items-center w-full">
          <TruckIcon
            className={`size-6 ${setIconColor(OrderStepStatus.IN_TRANSIT)}`}
          />
          <div className={setBarColor(OrderStepStatus.DELIVERED)}></div>
        </div>
        <div className="flex items-center">
          <CheckCircleIcon
            className={`size-5 sm:size-6 ${setIconColor(
              OrderStepStatus.DELIVERED,
            )}`}
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-3 text-white text-sm">
        <p>
          <span className="font-bold mr-1">Status:</span>
          {OrderStatusString[currStep as string]} - {date}
        </p>
      </div>
    </div>
  )
}
