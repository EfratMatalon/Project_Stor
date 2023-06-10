import { AxiosResponse } from "axios"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"
import swal from "sweetalert"
import { client } from "../classes/client"
import { addclient } from "../store/function/clientThunk"
const Rrgister = () => {
    const patch = useDispatch()
    const [newClien, setNewClient] = useState<client>(new client())
    let nevigate = useNavigate()
    const regist = () => {
        addclient(newClien).then((x: AxiosResponse) => {
            debugger
            patch({ type:"לקוח קיים", payload: x  })
            swal("נרשמת בהצלחה", "", "success");
            nevigate("/myHome")
        })
    }
    return <div  style={{ textAlign: "center" }}>
            <h1>הרשמה לאתר </h1>
             <div className="col-xs-3" style={{ textAlign: "center" }}>
                <input  className="form-control" id="ex2" type="text" value={newClien.name} placeholder="הכנס שם" onChange={(e) => setNewClient({ ...newClien, name: e.target.value })} ></input>
                 <br></br>
                <input className="form-control" id="ex2" type="text" value={newClien.password} placeholder="הכנס סיסמא" onChange={(e) => setNewClient({ ...newClien, password: e.target.value })} ></input>
                <br></br>               
                <button onClick={() => regist()}>הרשם</button><br></br><br></br>

            </div> 
    </div>
}
export default Rrgister

