import { ICart } from '../models/ICart';
import { IUser } from '../models/IUser';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  return items as ICart[]
};

export const getAuthFromLS = () => {

  const data = localStorage.getItem('auth');
  if (data) {
    return {
    IsAuth:true,
    error: "",
    IsLoading: false,
    IsNavigate: false,
     user: {} as IUser,
    }
  } else {
    return{  
      IsAuth:false,
      error: "",
      IsLoading: false,
      IsNavigate: false,
     user: {} as IUser,
    }
  }

}


