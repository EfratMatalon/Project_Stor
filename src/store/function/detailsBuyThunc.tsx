import axios, { AxiosResponse } from "axios";
import { detailsBuy } from "../../classes/detailsBuy";

export const baseURL="http://localhost:1234/DetailsBuy/"
//הוספה
export function AddBuy(x:detailsBuy):Promise<AxiosResponse>{
    return axios.put<Array<detailsBuy>>(`${baseURL}AddBuy`,x)
}