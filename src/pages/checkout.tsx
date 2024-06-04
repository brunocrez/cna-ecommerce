import {
  TruckIcon,
  CreditCardIcon,
  BanknotesIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline'
import { Header } from '@/components/header'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { Footer } from '@/components/footer'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

export default function CheckoutPage() {
  return (
    <div className="bg-slate-800">
      <Header />
      <div className="h-full py-6 px-3">
        <section className="mb-6">
          <Card className="bg-slate-700">
            <CardHeader className="p-4 pb-2">
              <div className="flex gap-3 text-white mb-3">
                <TruckIcon className="size-6 " />
                <h2 className="font-bold">Endereço de Entrega</h2>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="text-white text-xs flex flex-col gap-1 ">
                <p>Samuel Ferreira dos Santos</p>
                <p>Avenida Pão com Alface, 3179</p>
                <p>AP 1001</p>
                <p>Uberlândia, MG 38400-000</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" size={'sm'}>
                Alterar
              </Button>
            </CardFooter>
          </Card>
        </section>
        <section className="mb-6">
          <Card className="bg-slate-700">
            <CardHeader className="p-4 pb-2">
              <div className="flex gap-3 text-white mb-3">
                <CreditCardIcon className="size-6 " />
                <h2 className="font-bold">Método de Pagamento</h2>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0 text-white">
              <RadioGroup defaultValue="option-one">
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="option-one"
                      id="option-one"
                      className="bg-white text-indigo-700"
                    />
                    <Label htmlFor="option-one" className="cursor-pointer">
                      Cartão de Crédito <span className="">(8888)</span>
                    </Label>
                  </div>
                  <CreditCardIcon className="size-5" />
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="option-two"
                      id="option-two"
                      className="bg-white text-indigo-700 cursor-pointer"
                    />
                    <Label htmlFor="option-two" className="cursor-pointer">
                      Boleto Bancário
                    </Label>
                  </div>
                  <BanknotesIcon className="size-5" />
                </div>
              </RadioGroup>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" size={'sm'}>
                Adicionar Meio de Pagamento
              </Button>
            </CardFooter>
          </Card>
        </section>
        <Separator className="bg-slate-700 mb-6" />
        {/* review order */}
        <section>
          <h2 className="text-white font-bold text-lg mb-4">
            Revisão do Pedido
          </h2>
          {Array.from({ length: 4 }).map((_, index) => (
            <div className="mb-4" key={index}>
              <div className="flex gap-4 mb-3">
                <Image
                  className="size-24 rounded-md"
                  src="https://img.freepik.com/free-photo/top-view-arrangement-with-keyboard_23-2148604846.jpg"
                  alt="imagem pedido"
                  height={100}
                  width={70}
                />
                <div className="flex flex-col gap-1 overflow-hidden">
                  <span className="text-white text-sm  text-ellipsis line-clamp-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, modi!
                  </span>
                  <div className="flex items-center">
                    <span className="text-gray-200 text-xs font-bold">R$</span>
                    <span className="text-gray-200 text-xl font-bold">
                      599,99
                    </span>
                    <Button className="ml-auto bg-transparent hover:bg-transparent">
                      <TrashIcon className="size-6 text-red-500" />
                    </Button>
                  </div>
                  <span className="text-sm text-green-600 font-bold">
                    Em Estoque!
                  </span>

                  <div className="flex items-center gap-2">
                    <Button
                      className="bg-transparent hover:bg-transparent px-0"
                      size={'sm'}
                    >
                      <MinusCircleIcon className="size-6" />
                    </Button>
                    <span className="text-gray-300">3</span>
                    <Button
                      className="bg-transparent hover:bg-transparent px-0"
                      size={'sm'}
                    >
                      <PlusCircleIcon className="size-6" />
                    </Button>
                  </div>
                </div>
              </div>
              <Separator className="bg-slate-700 mb-6" />
            </div>
          ))}
        </section>
        {/* total price */}
        <section>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <h2>Subtotal</h2>
            <span>R$ 2.200,99</span>
          </div>
          <div className="flex items-center justify-between text-gray-400 text-sm">
            <h2>Frete</h2>
            <span>R$ 49,99</span>
          </div>
          <div className="flex items-center justify-between text-gray-200 text-lg font-bold">
            <h2>Total</h2>
            <span className="text-green-600">R$ 2.199,99</span>
          </div>
          <Button className="w-full bg-indigo-700 mt-5">
            Finalizar Pedido
          </Button>
        </section>
      </div>
      <Footer />
    </div>
  )
}
