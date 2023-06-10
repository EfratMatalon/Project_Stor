import axios from "axios"
import React, { useEffect, useState } from "react"
import { category } from "../classes/category"
import { AxiosResponse } from "axios"
import { addCategory, dell, getAll, updeCategory } from "../store/function/categoryThunk"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
const Category = () => {
  let d = useDispatch()
  const [newCategory, setnewCategory] = useState<category>(new category())
  const [listCategory, setListCategory] = useState<Array<category>>([new category()])
  const [isEdit, setIsEdit] = useState(false)
  const [isRender, setIsRender] = useState(false)
  let  nevigate=useNavigate()

  const edit2 = (e: any) => {
    e.preventDefault()
    setIsEdit(false)
    updeCategory(newCategory)
    setnewCategory(new category())
    setIsRender(!isRender)
    }
  //מחיקה 
  const del = (e:category) => {
    dell(e).then((x: AxiosResponse) => {
      setIsRender(!isRender)

    })
  }
  //עריכה 
  const edit = (e: category) => {
    setIsEdit(true)
    setnewCategory(e)
  }

  // פונקציה שקורת בכל פעם שמרנדרים 
  useEffect(function () {
    getAll().then((x: AxiosResponse) => {
      setListCategory(x.data)
      //עדכון הסטור
      d ({ type: "fall-data", payload: x.data })
    })
  }, [isRender])


  return <div style={{textAlign:"center"}}>
    <h2>טבלת הקטגוריות</h2><br></br><br></br>
    <table className="table">
      <thead>
        <tr>
          <th style={{textAlign:"center"}}>קוד</th>
          <th style={{textAlign:"center"}}>שם הקטגוריה
          </th>
        </tr>
      </thead>
      <tbody>{ 
        listCategory.map((e: category) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td><button onClick={() => del(e)}>מחיקה</button></td>
            <td><button onClick={() => edit(e)}>עריכה</button></td>
          </tr>

        ))
      }</tbody>
    </table>
    <input type="submit"  value=" הוספת קטגוריה חדשה " onClick={() => nevigate("/myAddCategory")}></input>
    <div style={{textAlign:"right"}}>
      <h3 style={{textAlign:"right"}}> עריכת קטגוריה </h3><br></br>
      <div className="col-xs-3">
       <input type="text" value={newCategory.name} placeholder='הכנס שם חדש' onChange={(e) => setnewCategory({ ...newCategory, name: e.target.value })} style={{textAlign:"right"}} ></input><br></br><br></br>
        <input type="text" value={newCategory.id} placeholder='הכנס  קוד' onChange={(e)=> setnewCategory({...newCategory, id:parseInt(e.target.value)}) }></input>        <br></br> <br></br><br></br> 
       <input type="submit" value="עריכה" onClick={(e) => edit2(e)}></input>
      </div>
     </div> 
  </div>      
}
export default Category