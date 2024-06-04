import { createContext, PropsWithChildren, useEffect, useState } from 'react'

export interface CheckoutItem {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface CheckoutContextType {
  numberOfItems: number
  items: CheckoutItem[]
  subtotal: number
  addItemToCart: (item: CheckoutItem) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutProviderProps extends PropsWithChildren {}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [numberOfItems, setNumberOfItems] = useState(0)
  const [subtotal, setSubtotal] = useState(0)
  const [items, setItems] = useState<CheckoutItem[]>([])

  function addItemToCart(item: CheckoutItem) {
    setItems((state) => {
      const foundItem = state.find((stateItem) => stateItem.id === item.id)

      if (foundItem) {
        return state.map((stateItem) =>
          stateItem.id === item.id ? item : stateItem,
        )
      }

      return [...state, item]
    })
  }

  useEffect(() => {
    setNumberOfItems(items.reduce((acc, item) => acc + item.quantity, 0))
    setSubtotal(
      items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    )
  }, [items])

  return (
    <CheckoutContext.Provider
      value={{ numberOfItems, items, addItemToCart, subtotal }}
    >
      {children}
    </CheckoutContext.Provider>
  )
}
