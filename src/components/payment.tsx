import { AxiosResponse } from "axios"
import React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert"
import { bug } from "../classes/bug"
import { getById } from "../store/function/categoryThunk"
const Payment = () => {
    const selectorSumOfAll = useSelector((x: any) => x.BugReducer.sumOfAll)
    const s = () => {
        swal("הקניה בוצעה בהצלחה","","success")
    }
    return <div style={{ textAlign: "center" }}>
        <h2>סכום לתשלום: {selectorSumOfAll} ש"ח</h2>
        <h3>הזן פרטי אשראי</h3>
        <br></br><br></br>
        <div style={{ textAlign: "center" }} className="col-xs-3">
        <input className="form-control" id="ex2" type="text" placeholder="מספר הכרטיס" ></input>
        <br></br><br></br>
        <input className="form-control" id="ex2" type="text" placeholder="שלוש ספרות בגב הכרטיס " ></input>
        <br></br><br></br>
        <button type="submit" className="myButton" onClick={() => s()}>סיום</button>
        </div>
    </div>
}
export default Payment
