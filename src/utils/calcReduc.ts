import { ICart } from "../models/ICart";

export const calcTotalCount = (items: any[]) => {
  return items.reduce((acc, item) => item.count + acc, 0);
};


export const calcTotalPrice = (items: ICart[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};