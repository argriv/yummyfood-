import { AuthActionCreators } from "./reducers/auth/action-creator";
import * as PizzaActionCreators from './reducers/pizza/action-creator'
import * as CartActionCreators from './reducers/cart/action-creator'
import * as FilterActionCreators from './reducers/filter/action-creators'
export const allActionCreators = {
    ...AuthActionCreators,
    ...CartActionCreators,
    ...PizzaActionCreators,
    ...FilterActionCreators
}