import { TruckIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'

export function DeliveryAddress() {
  return (
    <div className="w-full bg-slate-700 p-6 rounded-md text-white">
      <div className="flex items-center gap-2 mb-6">
        <TruckIcon className="size-6" />
        <h2 className="font-bold text-xl">Entrega</h2>
      </div>
      <div className="text-white flex flex-col gap-1">
        <p>Samuel Ferreira dos Santos</p>
        <p>Avenida Pão com Alface, 3179</p>
        <p>AP 1001</p>
        <p>Uberlândia, MG 38400-000</p>
      </div>
      <Button className="w-full mt-6" size={'sm'}>
        Alterar
      </Button>
    </div>
  )
}
