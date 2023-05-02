import { Link , Navigate, redirect} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import '../style/loginstyle.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import { useEffect, useState } from 'react';
// ES6 Modules or TypeScript
import Swal from "sweetalert2";
import Product from "./products";

export default function LoginPage(props) {
  console.log(props.name)
  const [profile, setProfile] = useState(null)
  const clientId = "568469783953-91oshsq3dv3cfdof4i5acijp1bul14pu.apps.googleusercontent.com"
  useEffect(() => {
    const inintClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load("client:auth2", inintClient)
  }, [])

  function onSuccess(res) {
    setProfile(res.profileObj)
  }

  function onFailure(res) {
    console.log("failed", res);
  }

  const [email_local, setemail_local] = useState("")
  const [password_local, setpassword_local] = useState("")
  const [name_local, setname_local] = useState("")
  const [complete, setComplete] = useState(false)
  useEffect(() => {
    setemail_local(localStorage.getItem("email"))
    setpassword_local(localStorage.getItem("password"))
    setname_local(localStorage.getItem("name"))
  }, []);

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function inputEmail(e) {
    setEmail(e.target.value)
  }
  function inputPassword(e){
    setPassword(e.target.value)
  }
  function submitData(event) {
    event.preventDefault()
    if(email==email_local && password==password_local){
      setEmail("")
      setPassword("")
      setComplete(true)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'เข้าสู่ระบบเรียบร้อย',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'อีเมลหรือรหัสผ่านของคุณไม่ถูกต้อง',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }  

  function savaData(name,img,email) {
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("password","")
    return (
      <div>
        <GoogleLogout clientId={clientId} buttonText='Log out' onLogoutSuccess={logOut} />
      </div>
    )
  }
  function logOut() {
    setProfile(null)
  }
  
  return (
    <div className="login-container">
      <div className="head" >
        <h1>ยินดีต้อนรับเข้าสู่ลาซาด้า กรุณาเข้าสู่ระบบ</h1>
        <p>สมาชิกใหม่? <a style={{ color: "blue" }}><Link to="/register">ลงทะเบียน</Link></a> ที่นี่</p>
      </div>
      <form onSubmit={submitData}>
        <div class="mb-3">
          <label for="email" class="form-label">อีเมล</label>
          <input type="email" class="form-control" placeholder="กรุณาระบุอีเมล" name="email" onChange={inputEmail} value={email}/>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">รหัสผ่าน</label>
          <input type="password" class="form-control" placeholder="รหัสผ่านอย่างน้อย 8 ตัวพร้อมตัวเลข ตัวอักษร และอักขระ" name="password" onChange={inputPassword} value={password}/>
        </div>
        <button type="submit">เข้าสู่ระบบ</button>
        {profile ? savaData(profile.name,profile.imageUrl,profile.email) : (
          <GoogleLogin
            clientId={clientId}
            buttonText='Sign in with Google'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        )}
        {complete ? <Navigate to={"/product"}/>:<p></p>}
      </form>
    </div>
  )
}