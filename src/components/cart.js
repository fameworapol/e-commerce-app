import { Link, useLocation, useParams } from "react-router-dom"
import '../style/cart.css'
import Swal from "sweetalert2"
import axios from "axios"
import { useEffect,useState } from "react"

export default function Cart() {
    const [product, setProduct] = useState({})
    const id = useParams().id
    const data = useLocation().state.data.data
    console.log(data);

    useEffect(() => {
        getDetailProduct()
    }, [])
    
    function getDetailProduct() {
        axios.get(`http://localhost:8000/product/getProduct/${id}`).then(response=>{
            setProduct(response.data)
        }).catch(err=>{
            console.log(err);
        })
    }
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
                    <img src={product.img} />
                    <p>{product.description}</p>
                    <p>฿{product.price}</p>
                    <p>จำนวน : </p>
                </div>
            </div>
            <div className="pay">
                <form>
                    <div className="banking">
                        <label for="">เลือกวิธีการชำระเงิน</label>
                        <div class="form-check form-check-inline" >
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required/>
                            <label class="form-check-label" for="inlineRadio1">ธนาคารไทยพาณิชย์</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required/>
                            <label class="form-check-label" for="inlineRadio1">ธนาคารออมสิน</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" required/>
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
                            <p>ยอดรวม ({`${data}`}ชิ้น) </p>
                            <p>ค่าจัดส่ง </p>
                            <p>ยอดรวมทั้งสิ้น : </p>
                        </div>
                        <div>
                            <p>฿{product.price*data}</p>
                            <p>฿{20}.00</p>
                            <p className="final">฿{parseFloat(product.price*data) + 20.00}.00</p>
                        </div>
                    </div>
                    <Link to={"/pay"}><button type="submit">สั่งซื้อ</button></Link>
                </div>
            </div>
        </div>
    )
}