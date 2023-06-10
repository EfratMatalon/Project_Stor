import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Nav = () => {
  const isManegmet = useSelector((x: any) => x.clientReducer.fIsMenagment)
  const isClient = useSelector((x: any) => x.clientReducer.thisClient)
  const selecClient = useSelector((x: any) => x.clientReducer.name)
  return <div>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">עולם הצעצועים של הילדים </a>
        </div>
        <p className="navbar-brand1">{selecClient}</p>
        <ul className="nav navbar-nav">
          <li><Link to='/myHome'>דף הבית </Link></li>
          <li><Link to='/myLogin'>התחבר</Link>  </li>
          <li><Link to='/myRegister'>הרשם </Link> </li>
          <li><Link to='/myCategory'>רשימת קטגוריות</Link> </li>
          <li><Link to='/myGame'>רשימת משחקים </Link></li>
          <li><Link to='/myBug'> עגלת הקניות שלי 🛒  </Link></li>
        </ul>
      </div>
    </nav>
  </div>
}
export default Nav