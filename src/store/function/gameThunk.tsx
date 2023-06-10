import axios, { AxiosResponse } from "axios";
import { game } from "../../classes/game";

export const baseUrl='http://localhost:1234/game/'
//שליפת  רשימת המשחקים 
export function getall():Promise<AxiosResponse<Array<game>>>{
return axios.get<Array<game>>(`${baseUrl}getAll`)
}
//שליפת משחק לפי קוד 
export function getByid(e:game):Promise<AxiosResponse<Array<game>>>{
    return axios.get<Array<game>>(`${baseUrl}getByid/${e._id}`)
}
//שליפת משחק לפי קטגוריה 
export function getByCategory(e:number):Promise<AxiosResponse<Array<game>>>{
    return axios.get<Array<game>>(`${baseUrl}getGameByategory/${e}`)
}
//מחיקת משחק
export function dell(e:game):Promise<AxiosResponse<Array<game>>>{
    return axios.delete<Array<game>>(`${baseUrl}/delGame/${e.id}`)
}
//הוספת משחק 
export function addGame(e:game):Promise<AxiosResponse<Array<game>>>{
    return axios.put<Array<game>>(`${baseUrl}addGame/`,e)
}
//עדכון המשחק
export function updetGame(e:game):Promise<AxiosResponse<Array<game>>>{
    return axios.put<Array<game>>(`${baseUrl}updeGame/${e._id}`,e)
}