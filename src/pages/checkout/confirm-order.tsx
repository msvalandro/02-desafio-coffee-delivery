import { Trash } from '@phosphor-icons/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Counter } from '../../components/counter'
import { CheckoutContext } from '../../contexts/checkout-provider'

export function ConfirmOrder() {
  const {
    items,
    subtotal,
    updateQuantityOfItem,
    removeItemFromCart,
    cleanCart,
  } = useContext(CheckoutContext)

  const navigate = useNavigate()

  const deliveryFee = 3.5

  function formatCurrency(value: number) {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  function handleConfirmOrder() {
    cleanCart()
    navigate('/checkout/success')
  }

  function handleDecrementQuantity(id: number, quantity: number) {
    const newQuantity = Math.max(1, quantity - 1)

    updateQuantityOfItem(id, newQuantity)
  }

  function handleIncrementQuantity(id: number, quantity: number) {
    updateQuantityOfItem(id, quantity + 1)
  }

  function handleRemoveItem(id: number) {
    removeItemFromCart(id)
  }

  return (
    <div className="flex-1">
      <h2 className="mb-4 font-title text-title-xs text-base-subtitle">
        Cafés selecionados
      </h2>

      <div className="rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10">
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex flex-col justify-start">
              <div className="flex flex-1">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="mr-5 h-[64px] w-[64px]"
                />

                <div className="flex flex-col justify-between">
                  <p className="text-m text-base-subtitle">{item.name}</p>

                  <div className="flex h-[32px] justify-between gap-2">
                    <Counter
                      quantity={item.quantity}
                      onDecrement={() =>
                        handleDecrementQuantity(item.id, item.quantity)
                      }
                      onIncrement={() =>
                        handleIncrementQuantity(item.id, item.quantity)
                      }
                    />

                    <button
                      className="flex flex-1 items-center rounded-md bg-base-button px-2 text-xs font-normal uppercase text-base-text"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash size={20} className="mr-1 text-purple" />
                      remover
                    </button>
                  </div>
                </div>

                <strong className="ml-auto text-m font-bold text-base-text">
                  {formatCurrency(item.price * item.quantity)}
                </strong>
              </div>

              <div className="my-6 w-full border-b border-base-button"></div>
            </li>
          ))}
        </ul>

        <div className="mb-3 flex justify-between">
          <span className="text-s text-base-text">Subtotal</span>
          <span className="text-s text-base-text">
            {formatCurrency(subtotal)}
          </span>
        </div>

        <div className="mb-3 flex justify-between">
          <span className="text-s text-base-text">Entrega</span>
          <span className="text-s text-base-text">
            {formatCurrency(deliveryFee)}
          </span>
        </div>

        <div className="flex justify-between">
          <strong className="text-l font-bold text-base-subtitle">Total</strong>
          <strong className="text-l font-bold text-base-subtitle">
            {formatCurrency(subtotal + deliveryFee)}
          </strong>
        </div>

        <button
          className="mt-5 h-[46px] w-full rounded-md bg-yellow text-s font-bold uppercase text-white"
          onClick={handleConfirmOrder}
        >
          Confirmar pedido
        </button>
      </div>
    </div>
  )
}
