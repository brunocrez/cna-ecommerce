import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { Spinner } from './spinner'

type CounterInputProps = {
  onClickPlus: () => void
  onClickMinus: () => void
  value: number
  isLoading: boolean
}

export function CounterInput({
  onClickMinus,
  onClickPlus,
  value,
  isLoading,
}: CounterInputProps) {
  return (
    <div className="flex items-center gap-2 lg:ml-auto mr-8">
      <Button
        className="bg-transparent hover:bg-transparent px-0"
        size="sm"
        onClick={onClickMinus}
        disabled={isLoading || value < 2}
      >
        <MinusCircleIcon className="size-6" />
      </Button>
      {isLoading ? (
        <Spinner size="sm" />
      ) : (
        <span className="text-gray-300">{value}</span>
      )}

      <Button
        className="bg-transparent hover:bg-transparent px-0"
        size="sm"
        onClick={onClickPlus}
        disabled={isLoading}
      >
        <PlusCircleIcon className="size-6" />
      </Button>
    </div>
  )
}
