import { CartItem } from './reducers'

export enum ActionTypes {
  ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
}

export function addItemToCartAction(item: CartItem) {
  return {
    type: ActionTypes.ADD_ITEM_TO_CART,
    payload: item,
  }
}
