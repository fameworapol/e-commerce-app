import { Link, useLocation } from "react-router-dom"
import '../style/detail.css'

export default function Detail() {
    const location = useLocation()
    const data = location.state.data
    console.log(data);
    return (
        <div className="detail-container">
            <img src={data.img} />
            <div className="detail">
                <h2>{data.description}</h2>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#F7CF1D" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg> {data.rate} คะแนน</p>
                <h1>{data.price}฿</h1>
                <form>
                    <div className="labels">
                        <label for="exampleColorInput" class="form-label">สี</label>
                        <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#fff" title="Choose your color" />
                    </div>
                    <div className="labels">
                        <label for="count">จำนวน</label>
                        <input type="number" defaultValue={1} />
                    </div>
                    {/*to Cart component*/}
                    <Link to={"/cart"} state={{
                        data: {
                            description: data.description,
                            price: data.price,
                            rate:data.rate,
                            id:data.id,
                            img:data.img
                        }
                    }}>
                        <button type="submit">ซื้อเลย</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}