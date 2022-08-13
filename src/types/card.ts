import { ICard } from "../models/ICard";

export interface CardState {
    card:ICard[];
    Isloading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum CardActionTypes {
    FETCH_CARDS = 'FETCH_CARDS',
    FETCH_CARDS_SUCCESS = 'FETCH_CARDS_SUCCESS',
    FETCH_CARDS_ERROR = 'FETCH_CARDS_ERROR',
    FETCH_POPULAR_PRODUCT = 'FETCH_POPULAR_PRODUCT',
    SET_CARD_PAGE = 'SET_CARD_PAGE',
    SET_MODAL_PRODUCT = 'SET_MODAL_PRODUCT',
}

interface FetchCardAction {
    type: CardActionTypes.FETCH_CARDS
}

interface FetchCardSuccessAction {
    type: CardActionTypes.FETCH_CARDS_SUCCESS;
    payload: ICard[];
}

interface FetchPopularProductAction {
    type: CardActionTypes.FETCH_POPULAR_PRODUCT;
    payload: ICard[]
}

interface FetchCardErrorAction {
    type: CardActionTypes.FETCH_CARDS_ERROR;
    payload: string;
}

interface SetCardPage {
    type: CardActionTypes.SET_CARD_PAGE;
    payload: number;
}
interface SetModalProduct {
    type: CardActionTypes.SET_MODAL_PRODUCT;
    payloda: ICard;
}




type CardAction =
    FetchCardAction
    | FetchCardErrorAction
    | FetchCardSuccessAction
    | FetchPopularProductAction
    | SetCardPage
    | SetModalProduct;

export type {CardAction}
