import { AxiosResponse } from "axios"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { client } from "../classes/client"
import { Isexist } from "../store/function/clientThunk"
import swal from "sweetalert"
import clientReducer from "../store/Redocer/clientReducer"
const Login = () => {
    const patch = useDispatch()
    const [user, setUser] = useState<client>(new client())
    const seeError= useSelector((x:any)=>x.clientReducer.seeError)
    let nevigate = useNavigate()
    //התחברות 
    const login = () => {
        Isexist(user).then((x: AxiosResponse) => {
            patch({ type:"לקוח קיים", payload:  x  })
            debugger
            if (x.data.length != 0)
            nevigate("/myHome")
           
        })
    }
    return <div>
        <div className="container">
            <h2 style={{ textAlign: "center" }}>כניסה לחשבון האישי</h2>
            <div className="col-xs-3">
                <input className="form-control" id="ex2" type="text" placeholder="שם משתמש " onChange={(e) => setUser({ ...user, name: e.target.value })}></input>
                <br></br> <br></br>
                <input className="form-control" id="ex2" type="text" placeholder="סיסמא " onChange={(e) => setUser({ ...user, password: e.target.value })} ></input>
                {seeError&& swal("Oops!", "שם המשתמש או הסיסמא שגויים!", "error") }
                <br></br> <br></br>
                <button onClick={() => login()}> התחבר </button>
                <br></br><br></br>
                <p style={{ fontSize: "20px" }}> לא רשום???</p>
                <p style={{ fontSize: "25px" }}> <Link to="/myRegister">הרשם עכשיו!!!</Link></p>
            </div>
        </div>
    </div>
}
export default Login