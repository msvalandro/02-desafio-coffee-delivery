import {
  createContext,
  PropsWithChildren,
  useEffect,
  useReducer,
  useState,
} from 'react'

import { addItemToCartAction } from '../reducers/checkout/actions'
import { CartItem, checkoutReducer } from '../reducers/checkout/reducers'

interface CheckoutContextType {
  items: CartItem[]
  numberOfItems: number
  subtotal: number
  addItemToCart: (item: CartItem) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutProviderProps extends PropsWithChildren {}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [checkoutState, dispatch] = useReducer(
    checkoutReducer,
    {
      items: [],
      numberOfItems: 0,
      subtotal: 0,
    },
    (initialState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:checkout-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return initialState
    },
  )

  const { items, numberOfItems, subtotal } = checkoutState

  function addItemToCart(item: CartItem) {
    dispatch(addItemToCartAction(item))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(checkoutState)

    localStorage.setItem('@coffee-delivery:checkout-state-1.0.0', stateJSON)
  }, [checkoutState])

  return (
    <CheckoutContext.Provider
      value={{ numberOfItems, items, addItemToCart, subtotal }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
