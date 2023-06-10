import { category } from "../../classes/category";
import axios, { AxiosResponse } from 'axios'
export const baseUrl='http://localhost:1234/category/'
//שליפת הרשימה 
export function getAll():Promise<AxiosResponse<Array< category>>>{
    return axios.get<Array<category>>(`${baseUrl}getAll`)
}
//שליפה לפי קוד
export function getById(e:category):Promise<AxiosResponse<Array< category>>>{
    return axios.get<Array<category>>(`${baseUrl}getByid/${e.id}`)
}
//מחיקה מהרשימה 
export function dell(id:category):Promise<AxiosResponse<Array< category>>>{
    return axios.delete<Array<category>>(`${baseUrl}delCategory/${id.id}`)
}
//הוספה לרשימה 
export function addCategory(e:category):Promise<AxiosResponse<Array< category>>>{
    return axios.put<Array<category>>(`${baseUrl}addCategory`,e)
}
//עריכת הרשימה
export function updeCategory(e:category):Promise<AxiosResponse<Array< category>>>{
    return axios.put<Array<category>>(`${baseUrl}updeCategory/${e._id}`,e)}