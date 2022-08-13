import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';
import { ICard } from "../models/ICard";
import axios, { AxiosResponse } from "axios";

export default class PizzaService {

    static async getCards( 
        page: number, 
        limit: number,
        search: string,
        category: string,  
        sortBy: string, 
        order: string, ): Promise<AxiosResponse<ICard[]>> {
        const response = await axios.get<ICard[]>('https://626d16545267c14d5677d9c2.mockapi.io/items',{
            params: pickBy ({
                page,
                limit, 
                search,
                category, 
                sortBy, 
                order,
            },
            identity,)
        })
        return response
    }

    static async getPopular( 
        sortBy: string, 
        order: string ): Promise<AxiosResponse<ICard[]>> {
        const response = await axios.get<ICard[]>('https://626d16545267c14d5677d9c2.mockapi.io/items',{
            params:{
                sortBy, 
                order,
            }
        })
        return response
   }

   
}
