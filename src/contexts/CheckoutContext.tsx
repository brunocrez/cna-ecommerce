import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'
import { DeliveryOptionType } from '@/interfaces/DeliveryOptions'
import { UpdateOrderResponseType } from '@/interfaces/Order'
import { IProduct } from '@/interfaces/Product'

type CheckoutContextType = {
  zipCode: string
  setZipCode: Dispatch<SetStateAction<string>>
  zipError: string
  setZipError: Dispatch<SetStateAction<string>>
  deliveryOption: DeliveryOptionType | null
  setDeliveryOption: Dispatch<SetStateAction<DeliveryOptionType | null>>
  product: IProduct | undefined
  setProduct: Dispatch<SetStateAction<IProduct | undefined>>
  orderResponse: UpdateOrderResponseType | undefined
  setOrderResponse: Dispatch<
    SetStateAction<UpdateOrderResponseType | undefined>
  >
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
  const [product, setProduct] = useState<IProduct | undefined>(undefined)
  const [orderResponse, setOrderResponse] = useState<
    UpdateOrderResponseType | undefined
  >(undefined)

  return (
    <CheckoutContext.Provider
      value={{
        zipCode,
        setZipCode,
        zipError,
        setZipError,
        deliveryOption,
        setDeliveryOption,
        product,
        setProduct,
        orderResponse,
        setOrderResponse,
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
