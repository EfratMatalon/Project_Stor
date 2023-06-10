import { AxiosResponse } from "axios"
import { stat } from "fs"
import { dirname } from "path"
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { category } from "../classes/category"
import { game } from "../classes/game"
import { getAll } from "../store/function/categoryThunk"
import { getall, getByCategory } from "../store/function/gameThunk"
import Game from "./game"

const Home = () => {
    const [load, setload] = useState(false)
    const [IsFilrter, setIsFilter] = useState<boolean>(false)
    const [mylistGame, setmylistGame] = useState<Array<game>>()
    let nevigate = useNavigate()
    let d = useDispatch()
    let mylist: Array<any>
    useSelector((k: any) => {
        mylist = k.categoRyreducer.listCategory
    })
    //בעת טעינה
    useEffect(() => {
        if (mylist.length == 0)
            getAll().then((x: AxiosResponse) => {
                //עדכון הסטור
                d({ type: "הצג את כל הקטגוריות", payload: x.data })
                setload(!load)
            })
        getall().then((x: AxiosResponse) => {
            d({ type: "הצג משחקים", payload: x.data })
            setmylistGame(x.data)
        })
    }, [load])
    //פונקציה שמראה את כל המשחקים
    const showall = () => {
        setIsFilter(true)
        getall().then((x: AxiosResponse) => {
            d({ type: "עריכת רשימת המשחקים", payload: x.data })
        })
    }
    //פונקציה שמראה את המשחקים לפי קטגוריה
    const showByCategory = (o: number) => {
        getByCategory(o).then((x: AxiosResponse) => {
            d({ type: "הצג לפי קטגוריה", payload: x.data })
            setmylistGame(x.data)
        })
    }
    //פונקציה להצגת פרטים
    const detailes = (x: game) => {
        d({ type:"קבלת הפריטים", payload: x })
        

    }
    //פונקצית הוספה לסל 
    const addtobug = (e: game) => {
        debugger
        d({ type: "הוספת מוצר לסל", payload: {id: e.id,GameName:e.name,idGame:e.id,quantity: 1,price:e.price,sum:e.price} })
        nevigate("/myBug")
    }
    return <div>
        <div>
            <h1> ברוכים הבאים לחנות שלנו </h1>

            <select onChange={(e) => showByCategory(parseInt(e.target.value))}>
                <option key={0} >בחר קטגוריה להצגה</option>
                {
                    mylist!.map((l: category) => (
                        <option key={l.id} value={l.id}>{l.name}</option>
                    ))
                }
            </select>
            {IsFilrter && <button className="myButton" onClick={() => [showall(), setIsFilter(false)]}>בטל בחירה  </button>}
            <div className="container" style={{ textAlign: "center" }}>
            </div>
            {mylistGame?.map((e: game) => (
                <div className="col-sm-4">
                    <div className="panel panel-primary" style={{ width: 200, height: 292 }}>
                        <div className="panel-body" style={{ fontSize: "80px" }}>{e.pic}</div>
                        <h4 className="card-title" style={{ fontSize: "30px" }}>{e.name}</h4>
                        <button className="myButton" onClick={() => addtobug(e)}>הוסף  לסל</button><br></br><br></br>
                        <Link to="/myDetails">  <button className="myButton" onClick={() => detailes(e)} > פרטים נוספים</button> </Link>
                    </div>
                </div>
            ))}


        </div>
    </div>
}
export default Home