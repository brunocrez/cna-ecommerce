import { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDeliveryOptions } from '@/hooks/useDeliveryOptions'
import { formatCurrency } from '@/utils/formatCurrency'
import { useCheckout } from '@/contexts/CheckoutContext'
import { DeliveryOptionType } from '@/interfaces/DeliveryOptions'

type ZipCodeProps = {
  productId: string
}

export function ZipCode({ productId }: ZipCodeProps) {
  const { setZipCode, setZipError, zipCode, zipError, setDeliveryOption } =
    useCheckout()
  const [isEnabled, setIsEnabled] = useState(false)

  const { data } = useDeliveryOptions(productId, isEnabled)

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value.replace(/\D/g, '')
    value = value.replace(/^(\d{5})(\d)/, '$1-$2')
    setZipCode(value)
  }

  function handleClick() {
    if (!zipCode || zipCode.length !== 9) {
      return setZipError('Digite um CEP válido!')
    }

    setIsEnabled(true)
    setZipError('')
  }

  function handleClickRadioItem(option: DeliveryOptionType) {
    setDeliveryOption(option)
    setZipError('')
  }

  useEffect(() => {
    return () => {
      setDeliveryOption(null)
    }
  }, [])

  return (
    <div className="flex flex-col">
      <span className="block mb-3 text-white text-sm font-bold">
        Calcular frete e prazo de entrega
      </span>
      <div className="flex items-center gap-2">
        <Input
          type="text"
          placeholder="00000-000"
          className={`w-full sm:max-w-[324px] ${
            zipError ? 'border-2 border-red-600' : ''
          }`}
          value={zipCode}
          onChange={handleInputChange}
          maxLength={9}
        />
        <Button
          className="bg-white text-slate-800 font-bold"
          onClick={handleClick}
        >
          OK
        </Button>
      </div>
      {zipError && (
        <span className="mt-1 text-sm text-red-500">{zipError}</span>
      )}

      {data && (
        <div className="bg-slate-700 rounded-md text-white p-2 w-full sm:max-w-sm mt-3">
          <RadioGroup className="gap-4">
            {data.deliveryOptions.map((deliveryOption, idx) => {
              return (
                <div
                  key={deliveryOption.name}
                  className="bg-slate-600 rounded-md p-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={`option-${idx}`}
                      id={`option-${idx}`}
                      className="bg-white text-indigo-700 border-none"
                      onClick={() => handleClickRadioItem(deliveryOption)}
                    />
                    <Label
                      htmlFor={`option-${idx}`}
                      className="w-full cursor-pointer flex items-center justify-between"
                    >
                      <div className="flex flex-col gap-2">
                        <span>{deliveryOption.name}</span>
                        <span className="text-xs">
                          Chega em até {deliveryOption.deadline} dias úteis
                        </span>
                      </div>
                      <span className="block">
                        {!deliveryOption.price
                          ? 'Grátis'
                          : formatCurrency(deliveryOption.price)}
                      </span>
                    </Label>
                  </div>
                </div>
              )
            })}
          </RadioGroup>
        </div>
      )}
    </div>
  )
}
