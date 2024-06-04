import { Minus, Plus } from '@phosphor-icons/react'

interface CounterProps {
  quantity: number
  tailwindClasses?: string
  onIncrement: () => void
  onDecrement: () => void
}

export function Counter({
  quantity,
  tailwindClasses,
  onIncrement,
  onDecrement,
}: CounterProps) {
  return (
    <div
      className={`flex h-full items-center rounded-md bg-base-button px-2 ${tailwindClasses || ''}`}
    >
      <Minus
        weight="bold"
        size={14}
        className="cursor-pointer text-purple"
        onClick={onDecrement}
      />
      <span className="mx-1 inline-block w-[20px] text-center text-m text-base-text">
        {quantity}
      </span>
      <Plus
        weight="bold"
        size={14}
        className="cursor-pointer text-purple"
        onClick={onIncrement}
      />
    </div>
  )
}
