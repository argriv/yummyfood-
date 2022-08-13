import { ICart } from '../models/ICart';

export enum actionTypes {
	CART_REDUCE_ITEM = 'CART_REDUCE_ITEM',
	CART_ADD_ITEM = 'CART_ADD_ITEM',
	CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
	CART_MINUS_ITEM = 'CART_MINUS_ITEM',
	CART_TOTAL_PRICE = 'CART_TOTAL_PRICE',
	CART_CLEAR_ITEMS = 'CART_CLEAR_ITEMS'
}

interface ICartItemPayload {
	product: ICart
}

export interface ICartAddItem {
	type: actionTypes.CART_ADD_ITEM
	payload: ICartItemPayload
}

export interface ICartmModalProduct {
	type: actionTypes.CART_ADD_ITEM
	payload: ICartItemPayload
}

export interface ICartMinusItem {
	type: actionTypes.CART_MINUS_ITEM
	payload: string
}

export interface ICartReduceItem {
	type: actionTypes.CART_REDUCE_ITEM
	payload: number
}

export interface ICartRemoveItem {
	type: actionTypes.CART_REMOVE_ITEM
	payload: string
}

export interface ICartTotalPrice {
    type: actionTypes.CART_TOTAL_PRICE;
    payload: number;
}

export interface ICartClearItems {
	type: actionTypes.CART_CLEAR_ITEMS;
}


 type TypeActionCart = 
 ICartAddItem 
 | ICartRemoveItem 
 | ICartReduceItem 
 | ICartTotalPrice 
 | ICartClearItems 
 | ICartMinusItem;

 export type {TypeActionCart}

 