import { Button } from './ui/button'
import { Label } from './ui/label'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { CreditCardIcon, BanknotesIcon } from '@heroicons/react/24/outline'

export function PaymentCard() {
  return (
    <div className="w-full bg-slate-700 p-6 rounded-md text-white">
      <div className="flex items-center gap-2 mb-6">
        <CreditCardIcon className="size-6" />
        <h2 className="font-bold text-xl">Método de Pagamento</h2>
      </div>
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
      <Button className="w-full mt-6" size={'sm'}>
        Alterar
      </Button>
    </div>
  )
}
