import React, { ReactElement, ReactNode, CSSProperties } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
//בשבי ליבא תמונה ניבא אותה עם איזה שם נבחר
import MyLogo from './background.jpg'
import { url } from 'inspector';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import stor from './store/store';
import Nav from './components/nav';
import Category from './components/category';
import Home from './components/Home';
import Login from './components/login';
import Game from './components/game';
import Rrgister from './components/register';
import { bug } from './classes/bug';
import Bug from './components/bug';
import Detailes from './components/details';
import AddGame from './components/addGame';
import AddCategory from './components/addCategory';
import Payment from './components/payment';


function App() {



   return <div className="container" style={{ direction: "rtl" }}>
      <BrowserRouter>
         <Provider store={stor}>
            <Nav></Nav>
            <Routes>
               <Route path="/myCategory" element={<Category></Category>}></Route>
               <Route path="/myHome" element={<Home></Home>}></Route>
               <Route path="/myGame" element={<Game></Game>}></Route>
               <Route path="/myLogin" element={<Login></Login>}></Route>
               <Route path="/myRegister" element={<Rrgister></Rrgister>}></Route>
               <Route path="/myBug" element={<Bug></Bug>}></Route>
               <Route path="/myDetails" element={<Detailes></Detailes>}></Route>
               <Route path="/myAddGame" element={<AddGame></AddGame>}></Route>
              <Route path="/myAddCategory" element={<AddCategory></AddCategory>}></Route>
              <Route path="/myPayment" element={<Payment></Payment>}></Route>
            </Routes>
         </Provider>
      </BrowserRouter>

   </div>
}
export default App;
