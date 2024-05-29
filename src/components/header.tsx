import { ShoppingCart } from '@phosphor-icons/react'

import logoImg from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex items-center justify-between h-[104px] px-40">
      <img src={logoImg} alt="" />

      <div>
        <span>Porto Alegre, RS</span>
        <button>
          <ShoppingCart weight="fill" />
        </button>
      </div>
    </header>
  )
}
