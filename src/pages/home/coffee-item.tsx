import { ShoppingCart } from '@phosphor-icons/react'
import { useContext, useState } from 'react'

import { Counter } from '../../components/counter'
import { CheckoutContext } from '../../contexts/checkout-provider'

interface CoffeeItemProps {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  quantity: number
  imageUrl: string
}

export function CoffeeItem({
  id,
  name,
  description,
  tags,
  price,
  imageUrl,
}: CoffeeItemProps) {
  const [quantity, setQuantity] = useState(1)

  const { addItemToCart } = useContext(CheckoutContext)

  function handleQuantityDecrement() {
    setQuantity((state) => Math.max(state - 1, 1))
  }

  function handleQuantityIncrement() {
    setQuantity((state) => state + 1)
  }

  return (
    <li
      key={id}
      className="flex w-64 flex-col items-center rounded-bl-[36px] rounded-br-md rounded-tl-md rounded-tr-[36px] bg-base-card px-5 pb-5"
    >
      <img
        src={imageUrl}
        alt={name}
        width={120}
        height={120}
        className="-translate-y-5"
      />

      <div className="mt-3 flex gap-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex h-[21px] items-center rounded-full bg-yellow-light p-2 text-[0.625rem] font-bold uppercase text-yellow-dark"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="mt-4 font-title text-title-s text-base-subtitle">
        {name}
      </h3>

      <p className="mt-2 text-center text-s text-base-label">{description}</p>

      <footer className="mt-8 flex h-[38px] w-full items-center justify-between px-1">
        <span className="text-s text-base-text">
          R${' '}
          <strong className="font-title text-title-m">
            {price.toFixed(2)}
          </strong>
        </span>

        <Counter
          quantity={quantity}
          tailwindClasses="ml-auto"
          onDecrement={handleQuantityDecrement}
          onIncrement={handleQuantityIncrement}
        />

        <button
          className="ml-2 flex h-full w-[38px] items-center justify-center rounded-md bg-purple-dark hover:bg-purple"
          onClick={() => addItemToCart({ id, name, price, quantity })}
        >
          <ShoppingCart weight="fill" size={22} className="text-base-card" />
        </button>
      </footer>
    </li>
  )
}
