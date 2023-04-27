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
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/' element={<LoginPage profileinfo={profileInfo} />} />
              <Route path='/product/detail' element={<Detail />} />
              <Route path='/complete' element={<CompletePayment />} />
              <Route path='/product' element={<Product />} />
              <Route path='/profiledetail' element={<ProfileDetail/>} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </DataContext.Provider>
  );
}

export default App;
