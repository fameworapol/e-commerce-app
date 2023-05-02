import { Link, useLocation } from 'react-router-dom'
import '../style/navstyle.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DataContext from './data'
import { useContext, useState, useEffect } from 'react'
import Swal from "sweetalert2";

export default function Nav() {
    const [name, setname] = useState("")
    useEffect(() => {
        const storedName = localStorage.getItem('name');
        if (storedName) {
            setname(storedName);
        }
    }, [])
    function logOut() {

        Swal.fire({
            title: 'คุณต้องการออกจากระบบใช่หรือไม่?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่ , ออกจากระบบ',
            cancelButtonText:"ยกเลิก"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'ออกจากระบบเรียบร้อย',
                    'success'
                )
                localStorage.removeItem("name");
                localStorage.removeItem("email")
                localStorage.removeItem("password")
            }
        })
    }
    return (
        <div className="Nav-container">
            <Link to="/product"><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1KB2laMFY.1VjSZFnXXcFHXXa.png" /></Link>
            <div class="input-group mb-3 search">
                <input type="text" class="form-control" placeholder="ค้นหาในลาซาด้า" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </button>
            </div>
            <a><Link to="/register">สมัครสมาชิก</Link></a>
            {name ? <a onClick={logOut}><Link to="/">ลงชื่อออก</Link></a> : <a><Link to="/">ลงชื่อเข้าใช้</Link></a>}
        </div>
    )
}