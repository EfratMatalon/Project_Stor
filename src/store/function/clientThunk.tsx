import axios ,{AxiosResponse}from "axios"
import { client } from "../../classes/client"

export const baseUrl='http://localhost:1234/clients/'
//הוספת לקוח 
export function addclient(e:client):Promise<AxiosResponse<Array< client>>>{
   return axios.put <Array<client>>(`${baseUrl}addClient`,e)
}
//  בדיקה אם קיים הלקוח
export function Isexist(e:client):Promise<AxiosResponse<Array< client>>>{
   return axios.get <Array<client>>(`${baseUrl}getById/${e.name}/${e.password}`)
}
