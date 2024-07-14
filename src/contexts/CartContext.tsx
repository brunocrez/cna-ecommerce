import { GetCartItemResponseType } from '@/interfaces/Cart'
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react'

type CartContextType = {
  addItem: (id: string) => void
  removeItem: (id: string) => void
  cartItems: GetCartItemResponseType | undefined
  setCartItems: Dispatch<SetStateAction<GetCartItemResponseType | undefined>>
}

const CartContext = createContext<CartContextType>({} as CartContextType)

type CartProviderProps = {
  children: React.ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<
    GetCartItemResponseType | undefined
  >(undefined)

  const addItem = (id: string) => {
    setCartItems((prevState) => {
      const items = prevState?.items.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      })

      return { ...prevState, items } as GetCartItemResponseType
    })
  }

  const removeItem = (id: string) => {
    setCartItems((prevState) => {
      const items = prevState?.items.map((item) => {
        return item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      })

      return { ...prevState, items } as GetCartItemResponseType
    })
  }

  return (
    <CartContext.Provider
      value={{ addItem, removeItem, cartItems, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)

  if (!Object.entries(ctx).length) {
    throw new Error('useCart must be used within CartProvider')
  }

  return ctx
}
