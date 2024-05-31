import { Trash } from '@phosphor-icons/react'

import expressoImg from '../../assets/expresso.png'
import latteImg from '../../assets/latte.png'
import { Counter } from '../../components/counter'

export function ConfirmOrder() {
  return (
    <div className="flex-1">
      <h2 className="font-title text-title-xs mb-4 text-base-subtitle">
        Cafés selecionados
      </h2>

      <div className="rounded-md rounded-bl-[44px] rounded-tr-[44px] bg-base-card p-10">
        <ul>
          <li className="flex flex-col justify-start">
            <div className="flex flex-1">
              <img
                src={expressoImg}
                alt="Expresso Tradicional"
                className="mr-5 h-[64px] w-[64px]"
              />

              <div className="flex flex-col justify-between">
                <p className="text-m text-base-subtitle">
                  Expresso Tradicional
                </p>

                <div className="flex h-[32px] justify-between gap-2">
                  <Counter quantity={1} />

                  <button className="flex flex-1 items-center rounded-md bg-base-button px-2 text-xs font-normal uppercase text-base-text">
                    <Trash size={20} className="mr-1 text-purple" />
                    remover
                  </button>
                </div>
              </div>

              <strong className="ml-auto text-m font-bold text-base-text">
                R$ 9,90
              </strong>
            </div>

            <div className="my-6 w-full border-b border-base-button"></div>
          </li>

          <li className="flex flex-col justify-start">
            <div className="flex flex-1">
              <img
                src={latteImg}
                alt="Latte"
                className="mr-5 h-[64px] w-[64px]"
              />

              <div className="flex flex-col justify-between">
                <p className="text-m text-base-subtitle">Latte</p>

                <div className="flex h-[32px] justify-between gap-2">
                  <Counter quantity={2} />

                  <button className="flex flex-1 items-center rounded-md bg-base-button px-2 text-xs font-normal uppercase text-base-text">
                    <Trash size={20} className="mr-1 text-purple" />
                    remover
                  </button>
                </div>
              </div>

              <strong className="ml-auto text-m font-bold text-base-text">
                R$ 19,80
              </strong>
            </div>

            <div className="my-6 w-full border-b border-base-button"></div>
          </li>
        </ul>

        <div className="mb-3 flex justify-between">
          <span className="text-s text-base-text">Subtotal</span>
          <span className="text-s text-base-text">R$ 29,70</span>
        </div>

        <div className="mb-3 flex justify-between">
          <span className="text-s text-base-text">Entrega</span>
          <span className="text-s text-base-text">R$ 3,50</span>
        </div>

        <div className="flex justify-between">
          <strong className="text-l font-bold text-base-subtitle">Total</strong>
          <strong className="text-l font-bold text-base-subtitle">
            R$ 33,20
          </strong>
        </div>

        <button className="mt-5 h-[46px] w-full rounded-md bg-yellow text-s font-bold uppercase text-white">
          Confirmar pedido
        </button>
      </div>
    </div>
  )
}
