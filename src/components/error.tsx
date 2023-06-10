import React from "react"
import swal from "sweetalert"
const Error=()=>{

return <div>
    <h2>שם המשתמש או הסיסמא שגויים </h2>
   {swal("Oops!", "שם המשתמש או הסיסמא שגויים!", "error") }
</div>
}
export default Error