import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  imageUrl: string
}

interface CheckoutState {
  items: CartItem[]
  numberOfItems: number
  subtotal: number
}

interface Action {
  type: ActionTypes
  payload?: unknown
}

export function checkoutReducer(
  state: CheckoutState,
  action: Action,
): CheckoutState {
  switch (action.type) {
    case ActionTypes.ADD_ITEM_TO_CART: {
      const { item } = action.payload as { item: CartItem }

      const itemIndex = state.items.findIndex(
        (stateItem) => stateItem.id === item.id,
      )

      return produce(state, (draft) => {
        if (itemIndex > -1) {
          draft.numberOfItems -= draft.items[itemIndex].quantity
          draft.subtotal -=
            draft.items[itemIndex].price * draft.items[itemIndex].quantity

          draft.items[itemIndex] = item
          draft.numberOfItems += item.quantity
          draft.subtotal += item.price * item.quantity
          return
        }

        draft.items.push(item)
        draft.numberOfItems += item.quantity
        draft.subtotal += item.price * item.quantity
      })
    }

    case ActionTypes.UPDATE_QUANTITY_OF_ITEM: {
      const { id, quantity } = action.payload as {
        id: number
        quantity: number
      }

      const itemIndex = state.items.findIndex((item) => item.id === id)

      return produce(state, (draft) => {
        draft.numberOfItems -= draft.items[itemIndex].quantity
        draft.subtotal -=
          draft.items[itemIndex].price * draft.items[itemIndex].quantity

        draft.items[itemIndex].quantity = quantity
        draft.numberOfItems += quantity
        draft.subtotal += draft.items[itemIndex].price * quantity
      })
    }

    case ActionTypes.REMOVE_ITEM_FROM_CART: {
      const { id } = action.payload as { id: number }

      const itemIndex = state.items.findIndex((item) => item.id === id)

      return produce(state, (draft) => {
        draft.numberOfItems -= draft.items[itemIndex].quantity
        draft.subtotal -=
          draft.items[itemIndex].price * draft.items[itemIndex].quantity

        draft.items.splice(itemIndex, 1)
      })
    }

    case ActionTypes.CLEAN_CART:
      return {
        items: [],
        numberOfItems: 0,
        subtotal: 0,
      }

    default:
      return state
  }
}
