import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { OrderStatusBar } from '@/components/order-status-bar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { useCheckout } from '@/contexts/CheckoutContext'
import { formatCurrency } from '@/utils/formatCurrency'
import { formatDateHour } from '@/utils/formateDate'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'

export default function FinishOrderPage() {
  const { orderResponse } = useCheckout()
  console.log(orderResponse)
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
                    {orderResponse?.order.id}
                  </span>
                </div>
                <p className="text-indigo-300 text-sm mt-2">
                  {orderResponse &&
                    formatDateHour(orderResponse.order.createdAt)}
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
                  <span>
                    {orderResponse &&
                      formatCurrency(orderResponse.order.subTotal)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm mb-3">
                  <span>Frete:</span>
                  <span>
                    {orderResponse &&
                      formatCurrency(orderResponse.order.totalFreight)}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-slate-500 py-1 text-sm font-bold">
                  <span>Total Pedido:</span>
                  <span>
                    {orderResponse && formatCurrency(orderResponse.order.total)}
                  </span>
                </div>
              </section>

              <section className="bg-slate-700 rounded-md p-6 mt-3 text-white">
                {orderResponse?.orderItems.map((orderItem) => {
                  return (
                    <div key={orderItem.id} className="flex gap-2 mb-4">
                      <img
                        className="w-12 h-auto"
                        src={orderItem.Product.images[0].url}
                        alt="foto do pedido"
                      />
                      <div className="w-full">
                        <p className="text-ellipsis line-clamp-2 leading-4 text-sm mb-3">
                          {orderItem.Product.name}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs">
                            Quantidade: {orderItem.quantity}
                          </span>
                          <span className="text-sm">
                            {formatCurrency(orderItem.price)}
                          </span>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <Separator className="bg-slate-600 my-6" />
                <OrderStatusBar
                  currStep="ACCEPTED"
                  date={orderResponse?.order.createdAt || ''}
                />
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
                  <span>
                    {orderResponse &&
                      formatCurrency(orderResponse.order.subTotal)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-sm mb-3">
                  <span>Frete:</span>
                  <span>
                    {orderResponse &&
                      formatCurrency(orderResponse.order.totalFreight)}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-slate-600 py-1 text-sm font-bold">
                  <span>Total do Pedido:</span>
                  <span>
                    {orderResponse && formatCurrency(orderResponse.order.total)}
                  </span>
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
