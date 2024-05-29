import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'

import coffeeImg from '../../assets/coffee-intro.png'

export function Intro() {
  return (
    <div className="flex justify-between px-40 py-24">
      <div className="mr-14">
        <div>
          <h1 className="text-title-xl font-title mb-4 text-base-title">
            Encontre o café perfeito para qualquer hora do dia
          </h1>

          <p className="text-l text-base-subtitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-y-5">
          <div className="flex items-center">
            <div className="mr-3 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-yellow-dark">
              <ShoppingCart
                weight="fill"
                size={16}
                className="text-background"
              />
            </div>
            <p className="text-m text-base-text">Compra simples e segura</p>
          </div>

          <div className="flex items-center">
            <div className="mr-3 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-base-text">
              <Package weight="fill" size={16} className="text-background" />
            </div>
            <p className="text-m text-base-text">
              Embalagem mantém o café intacto
            </p>
          </div>

          <div className="flex items-center">
            <div className="mr-3 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-yellow">
              <Timer weight="fill" size={16} className="text-background" />
            </div>
            <p className="text-m text-base-text">Entrega rápida e rastreada</p>
          </div>

          <div className="flex items-center">
            <div className="mr-3 flex h-[32px] w-[32px] items-center justify-center rounded-full bg-purple">
              <Coffee weight="fill" size={16} className="text-background" />
            </div>
            <p className="text-m text-base-text">
              O café chega fresquinho até você
            </p>
          </div>
        </div>
      </div>

      <img
        src={coffeeImg}
        alt="Um copo de café sob fundo amarelo com grãos de café"
        className="h-[360px] w-[476px]"
      />
    </div>
  )
}
