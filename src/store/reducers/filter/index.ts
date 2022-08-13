import { Action, ActionType, RepositoriesState } from "../../../types/filter";
import { SortPropertyEnum } from "../../../types/selectS";

const initialState: RepositoriesState  = {
    value: '',
    categoryId: 0,
     filter: {
       name: 'популярности',
       sortProperty: SortPropertyEnum.RATING_DESC,
     },
}

export default function productReducer (state = initialState, action: Action): RepositoriesState {
      
        switch (action.type) {
            case ActionType.SEARCH_CARDS:
                return {...state, value: action.payload} 
            case ActionType.SEARCH_CATEGORY_ID:
                return {...state, categoryId: action.payload}
             case ActionType.SEARCH_FILTER:
                return {...state, filter: action.payload}  
            default:
                return state    
    }
}

