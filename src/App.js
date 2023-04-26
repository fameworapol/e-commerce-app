import RegisterPage from "./components/registerpage";
import LoginPage from "./components/login";
import Nav from "./components/navbar";
import Cart from "./components/cart";
import Product from "./components/products";

import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Detail from "./components/details";
import CompletePayment from "./components/completePayment";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Nav />
          <div className="content">
            {/*ส่วนนี้คือแสดงตลอด*/}
            <Routes>
              <Route path='/login' element={<LoginPage />}/>
              <Route path='/register' element={<RegisterPage />} />
              <Route path='/cart' element={<Cart/>} />
              <Route path='/' element={<Product/>} />
              <Route path='/detail' element={<Detail/>}/>
              <Route path='/complete' element={<CompletePayment/>}/>
            </Routes>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
