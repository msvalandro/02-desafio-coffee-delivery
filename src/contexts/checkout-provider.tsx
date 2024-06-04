import { createContext, PropsWithChildren, useEffect, useState } from 'react'

export interface CheckoutItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CheckoutContextType {
  numberOfItems: number
  items: CheckoutItem[]
  addItemToCart: (item: CheckoutItem) => void
}

export const CheckoutContext = createContext({} as CheckoutContextType)

interface CheckoutProviderProps extends PropsWithChildren {}

export function CheckoutProvider({ children }: CheckoutProviderProps) {
  const [numberOfItems, setNumberOfItems] = useState(0)
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
  }, [items])

  return (
    <CheckoutContext.Provider value={{ numberOfItems, items, addItemToCart }}>
      {children}
    </CheckoutContext.Provider>
  )
}
