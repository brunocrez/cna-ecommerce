import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { OrderStatusBar } from '@/components/order-status-bar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

export default function FinishOrderPage() {
  return (
    <div className="bg-slate-800">
      <Header />
      <div className="h-full lg:h-screen py-6 px-3">
        <Container>
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full">
              <section className="bg-slate-700 rounded-md p-6">
                <div className="flex flex-col sm:flex-row items-start gap-2 text-white font-bold">
                  <span className="text-lg">Pedido:</span>
                  <span className="text-sm sm:text-lg">
                    0c4679e3-6d6f-4688-b278-221fe42095fe
                  </span>
                </div>
                <p className="text-indigo-300 text-sm mt-2">
                  2024-07-01 13:28:26.847
                </p>
                <p className="text-indigo-300 text-sm mt-2">Pedido criado.</p>
              </section>

              <Button className="mt-3 w-full flex items-center gap-3 bg-green-500 lg:hidden">
                <span>Avaliar Compra</span>
                <HandThumbUpIcon className="size-5" />
              </Button>

              <section className="bg-slate-700 rounded-md p-6 mt-3 text-white lg:hidden">
                <h2 className="text-lg font-bold mb-2">Entrega</h2>
                <p className="text-sm font-bold">Bruno da Costa Rezende</p>
                <p className="text-sm leading-5">
                  Avenida Cesário Alvim, 3114, AP 102, Uberlândia, MG
                </p>
              </section>

              <section className="bg-slate-700 rounded-md p-6 mt-3 text-white lg:hidden">
                <h2 className="text-lg font-bold mb-2">Forma de Pagamento</h2>
                <span className="text-sm">Pagamento via BOLETO</span>
              </section>

              <section className="bg-slate-700 rounded-md p-6 mt-3 text-white lg:hidden">
                <h2 className="text-lg font-bold mb-2">Valor</h2>
                <div className="flex justify-between items-center text-sm mb-3">
                  <span>Total Produto(s):</span>
                  <span>R$ 2.199,99</span>
                </div>
                <div className="flex justify-between items-center text-sm mb-3">
                  <span>Frete:</span>
                  <span>R$ 49,99</span>
                </div>
                <div className="flex justify-between items-center bg-slate-500 py-1 text-sm font-bold">
                  <span>Total Pedido:</span>
                  <span>R$ 2.149,99</span>
                </div>
              </section>

              <section className="bg-slate-700 rounded-md p-6 mt-3 text-white">
                <div className="flex gap-2 mb-4">
                  <img
                    className="w-12 h-auto"
                    src="https://images.unsplash.com/photo-1628832307345-7404b47f1751?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="foto do pedido"
                  />
                  <div className="w-full">
                    <p className="text-ellipsis line-clamp-2 leading-4 text-sm mb-3">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Consequuntur, error! Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit. Laborum, dolore.
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">Quantidade: 1</span>
                      <span className="text-sm">R$ 2.499,99</span>
                    </div>
                  </div>
                </div>
                <Separator className="bg-slate-600 my-6" />
                <OrderStatusBar />
              </section>
            </div>

            <div className="hidden lg:block w-full max-w-96">
              <section className="bg-slate-700 rounded-md p-6 text-white">
                <p className="text-sm font-bold">Bruno da Costa Rezende</p>
                <p className="text-sm leading-5">
                  Avenida Cesário Alvim, 3114, AP 102, Uberlândia, MG
                </p>

                <Separator className="bg-slate-600 my-3" />

                <span className="text-sm">Pagamento via BOLETO</span>

                <Separator className="bg-slate-600 my-3" />
                <div className="flex justify-between items-center text-sm mb-3">
                  <span>Total Produto(s):</span>
                  <span>R$ 2.199,99</span>
                </div>
                <div className="flex justify-between items-center text-sm mb-3">
                  <span>Frete:</span>
                  <span>R$ 49,99</span>
                </div>
                <div className="flex justify-between items-center bg-slate-600 py-1 text-sm font-bold">
                  <span>Total do Pedido:</span>
                  <span>R$ 2.149,99</span>
                </div>
              </section>

              <Button className="mt-3 w-full flex items-center gap-3 bg-green-500">
                <span>Avaliar Compra</span>
                <HandThumbUpIcon className="size-5" />
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}
