import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { game } from "../classes/game"

const Detailes = () => {
    let d = useDispatch()
    let nevigate = useNavigate()
    const selectGame: game = useSelector((x: any) => x.gameReducer.myGame)
    //הוספה לסל
    const addtobug = (e: game) => {
        d({ type: "הוספת מוצר לסל", payload: { id: e.id, GameName: e.name, quantity: 1, price: e.price, sum: e.price, pic: e.pic } })
        nevigate("/myBug")
    }
    const contBuy=()=>{
        nevigate("/myHome")
    }
    return <div style={{ textAlign: "center" }}>
 
        <h1>{selectGame.pic}</h1> <br></br>
        <h2> {selectGame.name}</h2>
        <h2> {selectGame.Description}</h2>
        <h2>מחיר : {selectGame.price} ש"ח</h2>
        <h2>קוד מוצר : {selectGame.id}</h2>
        <button className="myButton" onClick={() => addtobug(selectGame)} style={{margin:10}}>הוסף לסל🛒 </button>
        <button className="myButton" onClick={() => contBuy()}> המשך לקנות  </button>

    </div>
}
export default Detailes
