import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'

import deliveryImg from '../assets/delivery.png'

export function Confirmed() {
  return (
    <div className="mx-auto my-0 mb-40 mt-20 max-w-[1120px]">
      <h1 className="text-title-l font-title text-yellow-dark">
        Uhu! Pedido confirmado
      </h1>
      <p className="text-base-l text-l">
        Agora é só aguardar que logo o café chegará até você
      </p>

      <div className="mt-10 flex items-center justify-between">
        <div className="flex w-[526px] items-center justify-center rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-gradient-to-r from-yellow to-purple p-[1px]">
          <div className="flex h-full w-full flex-col gap-8 rounded-md rounded-bl-[36px] rounded-tr-[36px] bg-background p-10">
            <div className="flex">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-purple">
                <MapPin weight="fill" size={16} className="text-background" />
              </div>

              <div>
                <p className="text-m text-base-text">
                  Entrega em{' '}
                  <strong className="font-bold">
                    Rua João Daniel Martinelli, 102
                  </strong>
                </p>
                <p className="text-m text-base-text">
                  Farrapos - Porto Alegre, RS
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-yellow">
                <Timer weight="fill" size={16} className="text-background" />
              </div>

              <div>
                <p className="text-m text-base-text">Previsão de entrega</p>
                <p className="text-m text-base-text">20 min - 30 min</p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-dark">
                <CurrencyDollar size={16} className="text-background" />
              </div>

              <div>
                <p className="text-m text-base-text">Pagamento na entrega</p>
                <p className="text-m text-base-text">Cartão de Crédito</p>
              </div>
            </div>
          </div>
        </div>

        <img
          src={deliveryImg}
          alt="Um homem fazendo serviço de entrega em uma motocicleta"
        />
      </div>
    </div>
  )
}
