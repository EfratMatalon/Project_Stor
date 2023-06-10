import axios, { AxiosResponse } from "axios"
import { buy } from "../../classes/buy"
//הוספת קניה
export const baseUrl='http://localhost:1234/buy/'
export function AddBuy(b:any):Promise<AxiosResponse<Array<buy>>>{
    return axios.put<Array<buy>>(`${baseUrl}AddBuy`,b)
}