import { ICard } from "../../../models/ICard";
import {CardAction, CardActionTypes, CardState} from "../../../types/card";

const initialState: CardState = {
    card: {} as ICard[] ,
    page: 1,
    error: null,
    limit: 5,
    Isloading: false,
}

export default function authReducer(state = initialState, action: CardAction): CardState {

        switch (action.type) {
            case CardActionTypes.FETCH_CARDS:
                return {...state, Isloading: true}
            case CardActionTypes.FETCH_CARDS_SUCCESS:
                return {...state, Isloading: false, card: action.payload}
            case CardActionTypes.FETCH_CARDS_ERROR:
                return {...state, Isloading: false, error: action.payload}
            case CardActionTypes.SET_CARD_PAGE:
                return {...state, page: action.payload}
            default:
                return state
    }
}