import { Link, useLocation } from "react-router-dom"
import '../style/cart.css'
import Swal from "sweetalert2"

export default function Cart() {
    const location = useLocation()
    const data = location.state.data
    return (
        <div className="cart-container">
            <div className="details">
                <form className="address">
                    <div class="mb-3">
                        <label for="address" class="form-label">ที่อยู่ในการจัดส่ง</label>
                        <textarea class="form-control" id="address" rows="3"></textarea>
                    </div>
                </form>
                <div className="item-check">
                    <img src={data.img} />
                    <p>{data.description}</p>
                    <p>฿{data.price}</p>
                    <p>จำนวน : 1</p>
                </div>
            </div>
            <div className="pay">
                <form>
                    <div className="banking">
                        <label for="">เลือกวิธีการชำระเงิน</label>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">ธนาคารไทยพาณิชย์</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">ธนาคารออมสิน</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                            <label class="form-check-label" for="inlineRadio1">ธนาคารกรุงเทพ</label>
                        </div>
                    </div>
                </form>
                <div className="coupon">
                    <label for="coupon">คูปองส่วนลด</label>
                    <div>
                        <input type="text" name="coupon" placeholder="กรูณาระบุคูปองส่วนลด" />
                        <button type="Submit">ยืนยัน</button>
                    </div>
                </div>
                <div className="summary">
                    <h4>ใบกำกับภาษีและข้อมูลติดต่อ</h4>
                    <h5>สรุปข้อมูลคำสั่งซื้อ</h5>
                    <div className="summarydata">
                        <div>
                            <p>ยอดรวม (1ชิ้น) </p>
                            <p>ค่าจัดส่ง </p>
                            <p>ยอดรวมทั้งสิ้น : </p>
                        </div>
                        <div>
                            <p>฿{data.price}</p>
                            <p>฿{20}.00</p>
                            <p className="final">฿{parseFloat(data.price) + 20.00}.00</p>
                        </div>
                    </div>
                    <Link to={"/pay"}><button type="submit">สั่งซื้อ</button></Link>
                </div>
            </div>
        </div>
    )
}