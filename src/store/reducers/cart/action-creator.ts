import { RootState } from "../.."
import { ICard } from "../../../models/ICard"
import { actionTypes } from "../../../types/cart"


export const addToCart = (product: ICard, count: number) => ({
	type: actionTypes.CART_ADD_ITEM,
	payload: { product, count },
})

export const minusToCart = (id: string)=> ({
	type: actionTypes.CART_MINUS_ITEM,
	payload: id
})

export const removeFromCart = (productId: string) => ({
	type: actionTypes.CART_REMOVE_ITEM,
	payload: productId,
})

export const clearCart = (product: ICard[] = []) => ({
	type: actionTypes.CART_CLEAR_ITEMS,
	payload: product
});

export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cart.find((obj) => obj.id === id);
