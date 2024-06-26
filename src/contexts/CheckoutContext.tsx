import { DeliveryOptionType } from '@/interfaces/DeliveryOptions'
import { CreateOrderRequestType } from '@/interfaces/Order'
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

type CheckoutContextType = {
  zipCode: string
  setZipCode: Dispatch<SetStateAction<string>>
  zipError: string
  setZipError: Dispatch<SetStateAction<string>>
  deliveryOption: DeliveryOptionType | null
  setDeliveryOption: Dispatch<SetStateAction<DeliveryOptionType | null>>
  quickPurchase: CreateOrderRequestType | null
  setQuickPurchase: Dispatch<SetStateAction<CreateOrderRequestType | null>>
}

const CheckoutContext = createContext<CheckoutContextType>(
  {} as CheckoutContextType,
)

type CheckoutProviderProps = {
  children: React.ReactNode
}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [zipCode, setZipCode] = useState<string>('')
  const [zipError, setZipError] = useState<string>('')
  const [deliveryOption, setDeliveryOption] =
    useState<DeliveryOptionType | null>(null)
  const [quickPurchase, setQuickPurchase] =
    useState<CreateOrderRequestType | null>(null)

  return (
    <CheckoutContext.Provider
      value={{
        zipCode,
        setZipCode,
        zipError,
        setZipError,
        deliveryOption,
        setDeliveryOption,
        quickPurchase,
        setQuickPurchase,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}

export function useCheckout() {
  const ctx = useContext(CheckoutContext)

  if (!Object.entries(ctx).length) {
    throw new Error('useCheckout must be used within CheckoutProvider')
  }

  return ctx
}
