import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from '@/contexts/AuthContext'
import { CheckoutProvider } from '@/contexts/CheckoutContext'
import { CartProvider } from '@/contexts/CartContext'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CheckoutProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </CheckoutProvider>
      </AuthProvider>
    </QueryClientProvider>
  )
}
