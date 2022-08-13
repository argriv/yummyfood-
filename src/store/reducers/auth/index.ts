import { AuthAction, AuthActionEnum, AuthState } from "../../../types/auth";
import { getAuthFromLS } from "../../../utils/getLocalStorage";

const initialState: AuthState = getAuthFromLS()

export default function authReducer(state = initialState, action: AuthAction): AuthState {
    
        switch (action.type) {
            case AuthActionEnum.SET_AUTH:
                return {...state, IsAuth: action.payload, IsLoading: false}
            case AuthActionEnum.SET_USER:
                return {...state, user: action.payload}
            case AuthActionEnum.SET_ERROR:
                return {...state, error: action.payload, IsLoading: false, IsNavigate: false}
            case AuthActionEnum.SET_IS_LOADING: 
                return {...state, IsLoading: action.payload }
            case AuthActionEnum.SET_AUTH_NAVIGATE:
                return {...state, IsNavigate: action.payload, }
            default:
                return state;
        }
}