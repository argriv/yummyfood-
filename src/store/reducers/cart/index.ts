import { ICart } from "../../../models/ICart"
import { actionTypes, TypeActionCart } from "../../../types/cart"
import { getCartFromLS } from "../../../utils/getLocalStorage";


const initialState: ICart[] = getCartFromLS();

export default function cartReducer (state = initialState, action: TypeActionCart) {
 	switch (action.type) {
 		case actionTypes.CART_ADD_ITEM: 
        {
 			const cart = [...state]
 			const { product } = action.payload
 			const foundProduct = cart.find(item => item.id === product.id)

 			if (foundProduct) {
				foundProduct.count++
			} else {
				cart.push({
					...product,
					count: 1
				})
 			}
        	return cart
        }
        case actionTypes.CART_MINUS_ITEM: 
		{ 
		  const cart = [...state]
		  const foundProduct = cart.find(item => item.id === action.payload)

		  if (foundProduct) {
			foundProduct.count-- 
		  }	
			return cart
		}
 		case actionTypes.CART_REMOVE_ITEM: 
		{ 
			return state.filter(item => item.id !== action.payload)
		}
		case actionTypes.CART_CLEAR_ITEMS: 
		{ 
			return state = []
		}
 		default:
 			return state
 	}
}