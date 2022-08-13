import { ActionType } from "../../../types/filter";
import { Sort } from "../../../types/selectS";

export const searchBarItem = ( value: string) => ({
    type: ActionType.SEARCH_CARDS,
    payload: value
});

export const searchCategoryId = ( idx: number) => ({
    type: ActionType.SEARCH_CATEGORY_ID,
    payload: idx
});

export const filterBarItem = ( obj: Sort ) => ({
    type: ActionType.SEARCH_FILTER,
    payload: obj
});