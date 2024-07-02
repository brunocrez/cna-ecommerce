import { TruckIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { useAuth } from '@/contexts/AuthContext'

export function DeliveryAddress() {
  const { user } = useAuth()
  const { street, number, complement, city, state, postalCode } =
    user.addresses[0]

  return (
    <div className="w-full bg-slate-700 p-6 rounded-md text-white">
      <div className="flex items-center gap-2 mb-6">
        <TruckIcon className="size-6" />
        <h2 className="font-bold text-xl">Entrega</h2>
      </div>
      <div className="text-white flex flex-col gap-2">
        <p>{user.name}</p>
        <p>
          {street}, {number}
        </p>
        {complement && <p>{complement}</p>}
        <p>
          {city}, {state} {postalCode.replace(/(\d{5})(\d{3})/, '$1-$2')}
        </p>
      </div>
      <Button className="w-full mt-6" size={'sm'}>
        Alterar
      </Button>
    </div>
  )
}
