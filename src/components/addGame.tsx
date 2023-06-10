

import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { game } from '../classes/game'
import { addGame} from "../store/function/gameThunk"

const AddGame = () => {
    const [newGame, setnewGame] = useState<game>(new game())
    let nevigate = useNavigate()

    return <div>
        <div style={{ textAlign: "right" }}>
            <h3 style={{ textAlign: "right" }}> הוספת משחק </h3><br></br>
            <div className="col-xs-3">
                <input type="text" value={newGame.name} placeholder='הכנס שם' onChange={(e) => setnewGame({ ...newGame, name: e.target.value })} style={{ textAlign: "right"}} ></input><br></br><br></br>
                <input type="text" value={newGame.IdCategory} placeholder=' קוד הקטגוריה' onChange={(e) => setnewGame({ ...newGame, IdCategory: parseInt(e.target.value) })} style={{ textAlign: "right" }} ></input><br></br><br></br>
                <input type="text" value={newGame.price} placeholder='מחיר' onChange={(e) => setnewGame({ ...newGame, price: parseInt(e.target.value) })} style={{ textAlign: "right" }} ></input><br></br><br></br>
                <input type="text" value={newGame.pic} placeholder='הכנס תמונה' onChange={(e) => setnewGame({ ...newGame, pic: e.target.value })} style={{ textAlign: "right" }} ></input><br></br><br></br>
                <input type="text" value={newGame.Description} placeholder='תיאור' onChange={(e) => setnewGame({ ...newGame, Description: e.target.value })} style={{ textAlign: "right" }} ></input><br></br><br></br>
                <input type="text" value={newGame.amount} placeholder='כמות' onChange={(e) => setnewGame({ ...newGame, amount: parseInt(e.target.value) })} style={{ textAlign: "right" }} ></input><br></br><br></br>
                <input type="submit" value="הוספה" onClick={(e) => [addGame(newGame),nevigate("/myGame")]}></input>
            </div>
        </div>
    </div>
}
export default AddGame