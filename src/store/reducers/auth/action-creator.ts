import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import { AuthActionEnum, SetAuthAction, SetAuthNavigateAction, SetErrorAction, SetLoadingAction, SetUserAction } from "../../../types/auth";
export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type:AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type:AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetLoadingAction => ({type:AuthActionEnum.SET_IS_LOADING, payload}),
    setIsAuthNavigate: (payload: boolean): SetAuthNavigateAction => ({type:AuthActionEnum.SET_AUTH_NAVIGATE, payload}),
    setError: (payload: string): SetErrorAction => ({type:AuthActionEnum.SET_ERROR, payload}),
    authorization: () => async (dispatch: AppDispatch) => { 
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            // why do you need setUser:
            // const response = await axios.get server-user
            // const mockUser =  response.data.find(user => user.username === username && user.password === password)
            // if (mockUser) {
            //     localStorage.setItem('auth', 'true')
            //     localStorage.setItem('username', mockUser.username)
            //     dispatch(AuthActionCreators.setUser(mockUser))
            //     dispatch(AuthActionCreators.setIsAuth(true))
            // }
            setTimeout( async () => {
            localStorage.setItem('auth', 'true')
            dispatch(AuthActionCreators.setIsAuth(true))
            dispatch(AuthActionCreators.setIsLoading(false));
            dispatch(AuthActionCreators.setIsAuthNavigate(true));
            },2000)
            setTimeout(() => {
            dispatch(AuthActionCreators.setIsAuthNavigate(false));
            },2000)
        }
        catch (e){
            dispatch(AuthActionCreators.setError('Error loading'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try {
            localStorage.removeItem('auth')
            localStorage.removeItem('username')
            localStorage.removeItem('src')
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setIsAuth(false))
        }
        catch (e){

        }
    }
}