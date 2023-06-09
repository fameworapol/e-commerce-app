import RegisterPage from "./components/registerpage";
import LoginPage from "./components/login";
import Nav from "./components/navbar";
import Cart from "./components/cart";
import Product from "./components/products";
import { useState } from "react";
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Detail from "./components/details";
import CompletePayment from "./components/completePayment";
import DataContext from "./components/data";
import ProfileDetail from "./components/profileDetail";
import GLogin from "./components/googleLogin";
import PayBank from "./components/payBank";

function App() {
  const [name, setName] = useState("")
  const [img, setimg] = useState("")
  const [email, setemail] = useState("")
  function profileInfo(name, img, email) {
    setName(name)
    setimg(img)
    setemail(email)
    console.log(name,img,email);
  }
  
  return (
    <DataContext.Provider value={
      {
        name: name,
        img: img,
        email: email
      }
    }>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <div className="content">
            {/*ส่วนนี้คือแสดงตลอด*/}
            <Routes>
              <Route path='/register' element={<RegisterPage id={1}/>}/>
              <Route path='/cart/:id' element={<Cart />}/>
              <Route path='/' element={<LoginPage profileinfo={profileInfo}/>} />
              <Route path='/detail/:id' element={<Detail />}/>
              <Route path='/complete' element={<CompletePayment/>} />
              <Route path='/product' element={<Product/>}/>
              <Route path='/profiledetail' element={<ProfileDetail/>}/>
              <Route path='/g-login' element={<GLogin/>}/>
              <Route path='/pay' element={<PayBank/>}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </DataContext.Provider>
  );
}

export default App;
