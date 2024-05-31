import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import * as RadioGroup from '@radix-ui/react-radio-group'

import { Input } from '../../components/input'
import { RadioButton } from '../../components/radio-button'

export function OrderForm() {
  return (
    <div className="min-w-[640px]">
      <h2 className="font-title text-title-xs mb-4 text-base-subtitle">
        Complete seu pedido
      </h2>

      <form>
        <div className="rounded-md bg-base-card p-10">
          <header className="mb-8 flex">
            <MapPinLine size={22} className="text-yellow-dark" />

            <div className="ml-2">
              <h3 className="text-m text-base-subtitle">Endereço de Entrega</h3>
              <p className="text-s text-base-text">
                Informe o endereço onde deseja receber seu pedido
              </p>
            </div>
          </header>

          <Input placeholder="CEP" width={200} block />

          <Input placeholder="Rua" block />

          <div className="flex gap-3">
            <Input placeholder="Número" width={200} />
            <Input placeholder="Complemento" />
          </div>

          <div className="flex gap-3">
            <Input placeholder="Bairro" width={200} />
            <Input placeholder="Cidade" />
            <Input placeholder="UF" width={60} />
          </div>
        </div>

        <div className="mt-3 rounded-md bg-base-card p-10">
          <header className="mb-8 flex">
            <CurrencyDollar size={22} className="text-purple" />

            <div className="ml-2">
              <h3 className="text-m text-base-subtitle">Pagamento</h3>
              <p className="text-s text-base-text">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <RadioGroup.Root className="mt-8 flex items-center justify-between gap-3">
            <RadioButton value="credit-card">
              <CreditCard size={16} className="mr-3 text-purple" />
              cartão de crédito
            </RadioButton>

            <RadioButton value="debit-card">
              <Bank size={16} className="mr-3 text-purple" />
              cartão de débito
            </RadioButton>

            <RadioButton value="cash">
              <Money size={16} className="mr-3 text-purple" />
              dinheiro
            </RadioButton>
          </RadioGroup.Root>
        </div>
      </form>
    </div>
  )
}
