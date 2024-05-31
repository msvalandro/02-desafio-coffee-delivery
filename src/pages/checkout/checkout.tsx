import { ConfirmOrder } from './confirm-order'
import { OrderForm } from './order-form'

export function Checkout() {
  return (
    <main>
      <div className="mx-auto my-0 flex max-w-[1120px] gap-8">
        <OrderForm />
        <ConfirmOrder />
      </div>
    </main>
  )
}
