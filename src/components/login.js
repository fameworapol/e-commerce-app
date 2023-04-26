import { Link } from "react-router-dom";
import '../style/loginstyle.css'
export default function LoginPage() {
    return (
      <div className="login-container">
        <div className="head">
          <h1>ยินดีต้อนรับเข้าสู่ลาซาด้า กรุณาเข้าสู่ระบบ</h1>
          <p>สมาชิกใหม่? <a style={{ color: "blue" }}><Link to="/register">ลงทะเบียน</Link></a> ที่นี่</p>
        </div>
        <form>
          <div class="mb-3">
            <label for="email" class="form-label">อีเมล</label>
            <input type="email" class="form-control" placeholder="กรุณาระบุอีเมล" name="email" />
          </div>

          <div class="mb-3">
            <label for="password" class="form-label">รหัสผ่าน</label>
            <input type="password" class="form-control" placeholder="รหัสผ่านอย่างน้อย 8 ตัวพร้อมตัวเลข ตัวอักษร และอักขระ" name="password" />
          </div>
          <button type="submit">เข้าสู่ระบบ</button>
          <button type="submit" className="google">Login with Google</button>
          <a>ลืมรหัสผ่าน</a>
        </form>
      </div>
    )
}