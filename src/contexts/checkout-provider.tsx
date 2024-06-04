import { createContext, PropsWithChildren, useEffect, useReducer } from 'react'

import {
  addItemToCartAction,
  removeItemFromCartAction,
  updateQuantityOfItemAction,
} from '../reducers/checkout/actions'
import { CartItem, checkoutReducer } from '../reducers/checkout/reducers'

interface CheckoutContextType {
  items: CartItem[]
  numberOfItems: number
  subtotal: number
  addItemToCart: (item: CartItem) => void
  updateQuantityOfItem: (id: number, quantity: number) => void
  removeItemFromCart: (id: number) => void
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

  function updateQuantityOfItem(id: number, quantity: number) {
    dispatch(updateQuantityOfItemAction(id, quantity))
  }

  function removeItemFromCart(id: number) {
    dispatch(removeItemFromCartAction(id))
  }

  useEffect(() => {
    const stateJSON = JSON.stringify(checkoutState)

    localStorage.setItem('@coffee-delivery:checkout-state-1.0.0', stateJSON)
  }, [checkoutState])

  return (
    <CheckoutContext.Provider
      value={{
        items,
        numberOfItems,
        subtotal,
        addItemToCart,
        updateQuantityOfItem,
        removeItemFromCart,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
