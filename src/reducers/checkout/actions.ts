import { CartItem } from './reducers'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
  UPDATE_QUANTITY_OF_ITEM = 'UPDATE_QUANTITY_OF_ITEM',
  REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
  CLEAN_CART = 'CLEAN_CART',
}

export function addItemToCartAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: { item },
  }
}

export function updateQuantityOfItemAction(id: number, quantity: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY_OF_ITEM,
    payload: { id, quantity },
  }
}

export function removeItemFromCartAction(id: number) {
  return {
    type: ActionTypes.REMOVE_ITEM_FROM_CART,
    payload: { id },
  }
}

export function cleanCartAction() {
  return {
    type: ActionTypes.CLEAN_CART,
  }
}
