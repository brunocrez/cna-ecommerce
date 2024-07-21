import { useRouter } from 'next/router'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Button } from '@/components/ui/button'
import { useCheckout } from '@/contexts/CheckoutContext'
import { Routes } from '@/utils/routes'

export default function PreCheckoutPage() {
  const { push } = useRouter()
  const { product } = useCheckout()

  return (
    <div className="bg-slate-800">
      <Header />
      <div className="h-screen py-6 px-3">
        <Container>
          <div className="bg-slate-700 rounded-md p-6">
            <div className="flex flex-col items-center sm:flex-row gap-4 mb-6">
              <div className="relative w-full max-w-72">
                <img
                  src={product?.images[0].url}
                  alt={product?.name}
                  className="object-cover rounded-md"
                />
              </div>
              <div className="my-auto">
                <p className="font-bold text-green-600 mb-1 uppercase text-sm text-center sm:text-left">
                  Produto adicionado no carrinho
                </p>
                <p className="text-center sm:text-left text-gray-300">
                  {product?.name}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
              <Button
                className="w-full max-w-96 bg-transparent border-2 border-white hover:scale-105 hover:bg-transparent transition-all ease-in-out duration-300"
                onClick={() => push(Routes.HOME)}
              >
                Continuar Comprando
              </Button>
              <Button
                className="w-full max-w-96 bg-indigo-600 hover:bg-indigo-600 hover:scale-105 transition-all ease-in-out duration-300"
                onClick={() => push(Routes.CART)}
              >
                Ir para Carrinho
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
