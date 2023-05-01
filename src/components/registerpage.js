import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import '../style/style.css'
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [name, setName] = useState("")
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [complete, setComplete] = useState(false)
  
  function inputName(e) {
    setName(e.target.value)
  }
  function inputEmail(e) {
    setEmail(e.target.value)
  }
  function inputPassword(e){
    setPassword(e.target.value)
  }
  function saveData(event) {
    event.preventDefault()
    const data = {
      name:name,email:email,password:password
    }
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    setName("")
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
  }

  return (
      <div className="register-container">
        <div className="head">
          <h1>สร้างบัญชีลาซาด้า</h1>
          <p>เป็นสมาชิกอยู่แล้วหรือ? <a style={{ color: "blue" }}><Link to="/login">บันทึกข้อมูล</Link></a> ที่นี่</p>
        </div>
        <form onSubmit={saveData}>
          <div class="mb-3">
            <label for="name" class="form-label">ชื่อ-สกุล</label>
            <input type="text" class="form-control" placeholder="ชื่อ-สกุล" name="name" onChange={inputName} value={name}/>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">อีเมล</label>
            <input type="email" class="form-control" placeholder="กรุณาระบุอีเมล" name="email" onChange={inputEmail} value={email}/>
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">รหัสผ่าน</label>
            <input type="password" class="form-control" placeholder="รหัสผ่านอย่างน้อย 8 ตัวพร้อมตัวเลข ตัวอักษร และอักขระ" name="password" onChange={inputPassword} value={password
            }/>
          </div>
          <div class="mb-3">
            <label for="confirm_password" class="form-label">ยืนยันรหัสผ่าน</label>
            <input type="password" class="form-control" placeholder="รหัสผ่านอย่างน้อย 8 ตัวพร้อมตัวเลข ตัวอักษร และอักขระ" name="confirm_password"/>
          </div>

          <div className="group">
            <div class="birth">
              <label for="date" class="form-label">วันเกิด</label>
              <input type="date" class="form-control" placeholder="รหัสผ่านอย่างน้อย 8 ตัวพร้อมตัวเลข ตัวอักษร และอักขระ" name="date" />
            </div>
            <div class="mb-3 gen">
              <label for="gender" class="mb-2">เพศ</label>
              <select class="form-select">
                <option selected>เลือก</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              รับข้อมูลสิทธิพิเศษ และโปรโมชั่นจากลาซาด้า ผ่านทาง SMS
            </label>
          </div>
          <button type="submit">สมัครสมาชิก</button>
          <p>ในการดำเนินการลงทะเบียนต่อ ฉันได้อ่านและยอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัวของลาซาด้าของลาซาด้า ซึ่งกำหนดวิธีที่ลาซาด้ารวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคลของฉัน และสิทธิ์ที่ฉันมีภายใต้กฎหมาย</p>
          {complete ? <Navigate to={"/"}/> :<p></p>}
        </form>
      </div>
  );
};

export default RegisterPage;
