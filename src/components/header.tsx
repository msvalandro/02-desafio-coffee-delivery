import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import logoImg from '../assets/logo.svg'
import { CheckoutContext } from '../contexts/checkout-provider'

export function Header() {
  const { numberOfItems } = useContext(CheckoutContext)

  return (
    <header className="sticky left-0 top-0 z-10 flex h-[104px] items-center justify-between bg-background px-40">
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>

      <div className="flex h-[38px]">
        <div className="mr-3 flex h-full items-center justify-center rounded-md bg-purple-light px-2">
          <MapPin weight="fill" size={22} className="text-purple" />

          <span className="ml-1 text-s text-purple-dark">Porto Alegre, RS</span>
        </div>

        <button className="relative flex h-[38px] w-[38px] items-center justify-center rounded-md bg-yellow-light">
          {numberOfItems > 0 && (
            <span className="absolute right-0 top-0 flex h-[20px] w-[20px] -translate-y-2/4 translate-x-2/4 items-center justify-center rounded-full bg-yellow-dark text-xs leading-none text-white">
              {numberOfItems}
            </span>
          )}

          <NavLink to="/checkout">
            <ShoppingCart
              weight="fill"
              size={22}
              className="text-yellow-dark"
            />
          </NavLink>
        </button>
      </div>
    </header>
  )
}
