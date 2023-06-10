import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { category } from "../classes/category"
import { addCategory } from "../store/function/categoryThunk"

const AddCategory = () => {
    const [newCategory, setnewCategory] = useState<category>(new category())
    let nevigate = useNavigate()
    return <div>
        <div style={{ textAlign: "right" }}>
            <h3 style={{ textAlign: "right" }}> הוספת קטגוריה </h3><br></br>
            <div className="col-xs-3">
                <input type="text" value={newCategory.name} placeholder='הכנס שם' onChange={(e) => setnewCategory({ ...newCategory, name: e.target.value })} style={{ textAlign: "right" }} ></input><br></br>
                <br></br> <br></br>
                <input type="text" value={newCategory.id} placeholder='הכנס קוד' onChange={(e) => setnewCategory({ ...newCategory, id: parseInt(e.target.value)})} style={{ textAlign: "right" }} ></input><br></br>
                <br></br> <br></br><br></br>
                <input type="submit" value="הוספה" onClick={(e) => [addCategory(newCategory), nevigate("/myCategory")]}></input>
            </div>
        </div>
    </div>
}
export default AddCategory