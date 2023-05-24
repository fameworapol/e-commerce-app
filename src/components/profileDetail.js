import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "../style/style.css";
import Swal from "sweetalert2";
import axios from "axios";

export default function ProfileDetail() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setgender] = useState("");
    useEffect(() => {
        const email_session = sessionStorage.getItem("email")
        getProfile(email_session)
    }, [])
    

    function getProfile(email) {
        axios.get(`http://localhost:8000/profile/getProfile/${email}`).then(response=>{
            setName(response.data.name)
            setEmail(response.data.email)
            setPassword(response.data.password)
            setgender(response.data.gender)
        }).catch(err=>{
            console.log(err);
        })
    }

    function inputName(e) {
        setName(e.target.value);
    }
    function inputEmail(e) {
        setEmail(e.target.value);
    }
    function inputPassword(e) {
        setPassword(e.target.value);
    }
    function inputGender(e) {
        setgender(e.target.value);
    }

    function saveData(event) {
        event.preventDefault();
        const data = {name:name,email:email,password:password,gender:gender}
        axios.put(`http://localhost:8000/profile/updateProfile`,data).then(response=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "แก้ไขข้อมูลเรียบร้อยแล้ว",
                showConfirmButton: false,
                timer: 1500
            })
        }).catch(err=>{
            console.log(err);
        })
    }

    function deleteAccount() {
        Swal.fire({
            title: 'คุณต้องการลบบัญชีใช่หรือไม่?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่ , ออกจากระบบ',
            cancelButtonText:"ยกเลิก"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/profile/deleteProfile/${email}`).then(response=>{
                    Swal.fire(
                        'Deleted!',
                        'ลบบัญชีเรียบร้อย',
                        'success'
                    )
                    sessionStorage.removeItem("name");
                    sessionStorage.removeItem("email")
                    window.location.replace('/')
                }).catch(err=>{
                    console.log(err);
                })
            }
        })
        
    }
    return (
        <div className="register-container">
            <form>
                <div class="mb-3">
                    <label for="name" class="form-label">
                        ชื่อ-สกุล
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        placeholder="ชื่อ-สกุล"
                        name="name"
                        onChange={inputName}
                        value={name}
                    />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">
                        อีเมล
                    </label>
                    <input
                        type="email"
                        class="form-control"
                        placeholder="กรุณาระบุอีเมล"
                        name="email"
                        onChange={inputEmail}
                        value={email}
                    />
                </div>

                <div class="mb-3">
                    <label for="password" class="form-label">
                        รหัสผ่าน
                    </label>
                    <input
                        type="password"
                        class="form-control"
                        placeholder="รหัสผ่านอย่างน้อย 8 ตัวพร้อมตัวเลข ตัวอักษร และอักขระ"
                        name="password"
                        onChange={inputPassword}
                        value={password}
                    />
                </div>
                    <div class="mb-3 gen">
                        <label for="gender" class="mb-2">
                            เพศ
                        </label>
                        <select class="form-select" onChange={inputGender} value={gender}>
                            <option selected>เลือก</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                </div>
                <button type="submit" style={{background:'#199cb7'}} onClick={saveData}>อัพเดตข้อมูล</button>
                <button onClick={deleteAccount}
                style={{background:'red',border:'none',color:'white',height:'50px',fontWeight:'bolder',marginBottom:'20px'}}
                >ลบบัญชี
                </button>
            </form>
            
        </div>
    );
}
