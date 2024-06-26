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
  deliveryOption: number | null
  setDeliveryOption: Dispatch<SetStateAction<number | null>>
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
  const [deliveryOption, setDeliveryOption] = useState<number | null>(null)

  return (
    <CheckoutContext.Provider
      value={{
        zipCode,
        setZipCode,
        zipError,
        setZipError,
        deliveryOption,
        setDeliveryOption,
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
