import { MapPin, ShoppingCart } from '@phosphor-icons/react'

import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex h-[104px] items-center justify-between px-40">
      <img src={logoImg} alt="" />

      <div className="flex h-[38px]">
        <div className="mr-3 flex h-full items-center justify-center rounded-md bg-purple-light px-2">
          <MapPin weight="fill" size={22} className="text-purple" />
          <span className="ml-1 text-s text-purple-dark">Porto Alegre, RS</span>
        </div>

        <button className="relative flex h-[38px] w-[38px] items-center justify-center rounded-md bg-yellow-light">
          <span className="absolute right-0 top-0 flex h-[20px] w-[20px] -translate-y-2/4 translate-x-2/4 items-center justify-center rounded-full bg-yellow-dark text-xs leading-none text-white">
            1
          </span>
          <ShoppingCart weight="fill" size={22} className="text-yellow-dark" />
        </button>
      </div>
    </header>
  )
}
