import { IUser } from "../models/IUser";

export interface AuthState {
    IsAuth:boolean;
    user: IUser;
    IsLoading: boolean;
    error:string;
    IsNavigate: boolean;
}

export enum  AuthActionEnum {
    SET_AUTH = "SET_AUTH",
    SET_AUTH_NAVIGATE = "SET_AUTH_NAVIGATE",
    SET_ERROR = "SET_ERROR",
    SET_USER = "SET_USER",
    SET_IS_LOADING = "SET_IS_LOADING",
    SET_IMG = "SET_IMG"
}

export interface SetAuthAction {
    type: AuthActionEnum.SET_AUTH;
    payload: boolean;
}

export interface SetErrorAction {
    type: AuthActionEnum.SET_ERROR;
    payload: string;
}

export interface SetAuthNavigateAction {
    type: AuthActionEnum.SET_AUTH_NAVIGATE;
    payload: boolean;
}

export interface SetUserAction {
    type: AuthActionEnum.SET_USER;
    payload: IUser;
}

export interface SetLoadingAction {
    type: AuthActionEnum.SET_IS_LOADING;
    payload: boolean;
}


type AuthAction = 
    SetAuthAction |
    SetAuthNavigateAction |
    SetErrorAction | 
    SetUserAction |
    SetLoadingAction;


export type {AuthAction}