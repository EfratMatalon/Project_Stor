import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bug } from "../classes/bug";
import { game } from "../classes/game";
const Bug = () => {
    const gameToBuy = useSelector((x: any) => x.BugReducer.item)
    const sumOfAll = useSelector((x: any) => x.BugReducer.sumOfAll)
    let patch = useDispatch();
    let nevigate = useNavigate()
    useEffect(function () {
        debugger
    }, [1])



    //הפחתה מהכמות
    const dic = (e: bug) => {

        patch({ type: "חיסור מוצר בסל ", payload: { GameName: e.GameName, quantity: e.quantity, price: e.price, sum: e.sum } })
    }
    // הוספה לכמות המוצר בסל
    const more = (e: bug) => {
        patch({ type: "קידום מוצר בסל", payload: { GameName: e.GameName, quantity: e.quantity, price: e.price, sum: e.sum } })
    }
    //הסר מהסל
    const remove = (e: bug) => {
        patch({ type: "מחיקת מוצר מהסל", payload: { GameName: e.GameName, quantity: e.quantity, price: e.price, sum: e.sum } })
    }
    const finish = () => {
        nevigate("/myPayment")
    }
const contBuy=()=>{
    nevigate("/myHome")
}

    return <div>
        <div className="container" style={{ textAlign: "center" }}>
            <table className="table" style={{ textAlign: "center" }}>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>שם המשחק</th>
                        <th></th>
                        <th style={{ textAlign: "center" }}>כמות</th>
                        <th></th>
                        <th style={{ textAlign: "center" }}>מחיר</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        gameToBuy.map((e: bug) =>
                            <tr>
                                <td> {e.GameName}</td>
                                <td><button className="myButton" onClick={() => more(e)}> + </button></td>
                                <td> {e.quantity}</td>
                                <td><button className="myButton" onClick={() => dic(e)}> - </button></td>
                                <td> {e.price}</td>
                                <td><button className="myButton" onClick={() => remove(e)}> הסר </button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <p>סה"כ לתשלום:{sumOfAll}</p>
            <button className="myButton" onClick={() => finish()}> לתשלום </button>
        </div>
        <button className="myButton"  onClick={() => contBuy()}> המשך לקנות  </button>
    </div>

}
export default Bug