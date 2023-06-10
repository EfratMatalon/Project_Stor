import { AxiosResponse } from "axios"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { game } from '../classes/game'
import { getall, addGame, updetGame, dell } from "../store/function/gameThunk"



const Game = () => {
    let d = useDispatch()
    const [newGame, setnewGame] = useState<game>(new game())
    const [listGmae, setlistGame] = useState<Array<game>>([new game()])
    const [isEdit, setisEdit] = useState<boolean>(false)
    const [isRender, setisRender] = useState<boolean>(false)
    const nevigate = useNavigate()

    const edit2 = (e: any) => {
        e.preventDefault()
        setisEdit(false)
        updetGame(newGame)
        setnewGame(new game())
        setisRender(!isRender)
    }
    // //הוספה 
    // const add = (e: any) => {
    //     e.preventDefault()
    //     if (!isEdit)
    //         addGame(newGame).then((t: AxiosResponse) => { setisRender(!isRender) })
    //     else
    //         updetGame(newGame).then((t: AxiosResponse) => { setisRender(!isRender) })
    // }
    //מחיקה 
    const del = (e: game) => {
        dell(e).then((x: AxiosResponse) => {
            setisRender(!isRender)
        })
    }
    //עריכה
    const edit = (e: game) => {
        setisEdit(true)
        setnewGame(e)
    }
    // פונקציה שקורת בכל פעם שמרנדרים 
    useEffect(function () {
        getall().then((x: AxiosResponse) => {
            setlistGame(x.data)
            d({ type: "fall-data", payload: x.data })
        })
    }, [isRender])


    return <div style={{textAlign:"center"}}>
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>קוד</th>
                        <th style={{ textAlign: "center" }}>שם המשחק</th>
                        <th style={{ textAlign: "center" }}>קוד הקטגוריה</th>
                        <th style={{ textAlign: "center" }}>מחיר</th>
                        <th style={{ textAlign: "center" }}>תמונה</th>
                        <th style={{ textAlign: "center" }}>תיאור</th>
                        <th style={{ textAlign: "center" }}> כמות</th>
                    </tr>
                </thead>
                <tbody>{
                    listGmae.map((e: game) => (
                        <tr>
                            <td style={{ textAlign: "center" }}>{e.id}</td>
                            <td style={{ textAlign: "center" }}>{e.name}</td>
                            <td style={{ textAlign: "center" }}>{e.IdCategory}</td>
                            <td style={{ textAlign: "center" }}>{e.price}</td>
                            <td style={{ textAlign: "center" }}>{e.pic}</td>
                            <td style={{ textAlign: "center" }}>{e.Description}</td>
                            <td style={{ textAlign: "center" }}>{e.amount}</td>
                            <td style={{ textAlign: "center" }}><button onClick={() => del(e)}>מחיקה</button></td>
                            <td style={{ textAlign: "center" }}><button onClick={() => edit(e)}>עריכה</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <input type="submit"  value=" הוספת משחק חדש " onClick={() => nevigate("/myAddGame")}></input>
        <h3 style={{textAlign:"right"}}> עריכת המשחק </h3><br></br>
        <div className="col-xs-3">
            <input type="text" value={newGame.name} placeholder='הכנס שם' onChange={(e) => setnewGame({ ...newGame, name: e.target.value })} style={{ textAlign: "right" }} ></input><br></br><br></br>
            <input type="text" value={newGame.IdCategory} placeholder=' קוד הקטגוריה' onChange={(e) => setnewGame({ ...newGame, IdCategory: parseInt(e.target.value) })} style={{ textAlign: "right" }} ></input><br></br><br></br>
            <input type="text" value={newGame.price} placeholder='מחיר' onChange={(e) => setnewGame({ ...newGame, price: parseInt(e.target.value) })} style={{ textAlign: "right" }} ></input><br></br><br></br>
            <input type="text" value={newGame.pic} placeholder='הכנס תמונה' onChange={(e) => setnewGame({ ...newGame, pic: e.target.value })} style={{ textAlign: "right" }} ></input><br></br><br></br>
            <input type="text" value={newGame.Description} placeholder='תיאור' onChange={(e) => setnewGame({ ...newGame, Description: e.target.value })} style={{ textAlign: "right" }} ></input><br></br><br></br>
            <input type="text" value={newGame.amount} placeholder='כמות במלאי' onChange={(e) => setnewGame({ ...newGame, amount: parseInt(e.target.value) })} style={{ textAlign: "right" }} ></input><br></br><br></br>
            <input type="submit" value="עריכה" onClick={(e) => edit2(e)}></input>
        </div>
        <br></br> <br></br>

    </div>
}
export default Game


