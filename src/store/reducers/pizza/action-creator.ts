import { Dispatch } from "react";
import axios from "axios";
import {CardAction, CardActionTypes} from "../../../types/card";
import PizzaService from "../../../api/PizzaService";

export const fetchCards = (
    page: number, 
    limit: number,
    search: string,
    category: string,  
    sortBy: string, 
    order: string, 
    ) => {
        return async (dispatch: Dispatch<CardAction>) => {
            try {
                dispatch({type: CardActionTypes.FETCH_CARDS})
                const respons = await PizzaService.getCards(
                page,
                limit, 
                search,
                category, 
                sortBy, 
                order
                )
                dispatch({type: CardActionTypes.FETCH_CARDS_SUCCESS, payload: respons.data})
            }
            catch {
                dispatch({
                    type: CardActionTypes.FETCH_CARDS_ERROR,
                    payload: 'Произошла ошибка'
                })
            }
        }
}

export function setTodoPage(page: number): CardAction {
    return {type: CardActionTypes.SET_CARD_PAGE, payload: page}
}
