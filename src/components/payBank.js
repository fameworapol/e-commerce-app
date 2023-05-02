import { Link } from 'react-router-dom'
import '../style/pay.css'
import Swal from 'sweetalert2'
export default function PayBank() {
    function complete() {
        Swal.fire({
            title: 'ต้องการชำระเงินใช่หรือไม่?',
            text: "กรุณาตรวจสอบสินค้าและรายละเอียดของท่านให้เรียบร้อยก่อนชำระเงิน",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'ใช่ , ชำระเงิน'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'ชำระเงินเรียบร้อยแล้ว',
                'success'
              )
            }
          })
    }
    return (
        <div className="payBank-container">
            <form>
                <div class="mb-3">
                    <label for="number-card" class="form-label">หมายเลขบัตร</label>
                    <input type="text" class="form-control" name="number-card" />
                </div>
                <div class="mb-3">
                    <label for="name-card" class="form-label">ชื่อผู้ถือบัตร</label>
                    <input type="text" class="form-control" name="name-card"/>
                </div>
                <div className="card-detail">
                    <div class="mb-3">
                        <label for="exp-card" class="form-label">Expiration (MM/YY)</label>
                        <input type="text" class="form-control" name="exp-card" />
                    </div>
                    <div class="mb-3">
                        <label for="cvv-card" class="form-label">CVV</label>
                        <input type="text" class="form-control" name="cvv-card"/>
                    </div>
                </div>
                <Link to={"/complete"} style={{color:"white",textDecoration:"none"}} onClick={complete}><button type="submit">ยืนยัน</button></Link>
            </form>
        </div>
    )
}