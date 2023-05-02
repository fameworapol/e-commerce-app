import Ietms from "./item"
import '../style/itemstyle.css'
import { useLocation,Link } from "react-router-dom"
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useContext, useState,useEffect } from "react"
import DataContext from "./data"
export default function Product(props) {
    const data = [
        {
            id:1,
            description:"Samsung ซัมซุง เครื่องซักผ้า 2 ถัง รุ่น WT13B5040BA/STพร้อมด้วย Air Turbo ขนาด 13 กก.",
            img:"https://lzd-img-global.slatic.net/g/p/b0adbb1f2df69a2336bc729934acc555.jpg_200x200q80.jpg_.webp",
            price:"6190.00",
            rate:"4.9",
        },
        {
            id:2,
            description:"Baseus 240W PD Cable PD3.1 Type-C to Type-C Cable for MacBook Samsung Xiaomi",
            img:"https://lzd-img-global.slatic.net/g/p/e5e8e3004c945549effcf5236a098707.png_200x200q80.png_.webp",
            price:"139.00",
            rate:"4.8",
        },
        {
            id:3,
            description:"ปากกา iPad ไอแพด Pencil stylus 10th Gen ปากกาสไตลัส ปากกาทัชสกรีน stylus pen",
            img:"https://lzd-img-global.slatic.net/g/p/775394e8cba795b3b616fa574327a110.jpg_200x200q80.jpg_.webp",
            price:"1000.00",
            rate:"4.3",
        },
        {
            id:4,
            description:"SUNESY พาวเวอร์แบงค์ แบตสำรอง 15000mAh 22.5W 2 in 1 พร้อมปลั๊กชาร์จเร็วพิเศษ จัดแต่งทรงลิปสติก",
            img:"https://lzd-img-global.slatic.net/g/p/4bb2fd3798dcfd6c71b3b105c65ef2d3.jpg_200x200q80.jpg_.webp",
            price:"619.00",
            rate:"4.9",
        },
        {
            id:5,
            description:"เคสกระเป๋า Case OPPO A3S เคสฝาพับ ซองเปิดปิด เคสตั้งได้ ใส่นามบัตร เคสโทรศัพท์ ออฟโบ้ Oppo A3S เคสเปิดปิด",
            img:"https://lzd-img-global.slatic.net/g/p/b732c91e27d595244aba4bff0209a498.jpg_200x200q80.jpg_.webp",
            price:"1200.00",
            rate:"4.4",
        },
        {
            id:6,
            description:"หน้าจอ vivo T1 5G จอ LCD วีโว่ T1 5G (2022) อะไหล่มือถือ LCD Screen Display Touch vivo T1 5G จอT1 5G(2022)",
            img:"https://lzd-img-global.slatic.net/g/p/2837ccfb89faf86ce104e3fd67cda479.jpg_200x200q80.jpg_.webp",
            price:"449.00",
            rate:"4.4",
        },
        {
            id:7,
            description:"realme Watch S Pro,มือโปรอย่างมีสไตล์,screen AMOLED 1.39, GPS, Sport Functions",
            img:"https://lzd-img-global.slatic.net/g/p/04c692449afb747ab0aa41a8440db949.jpg_200x200q80.jpg_.webp",
            price:"4499.00",
            rate:"4.9",
        },
        {
            id:8,
            description:"Manis Lemon สายนาฬิกาข้อมือ แม่เหล็ก for Apple Watch band Serie 8 3 5 4 SE 6 7 2 1 Ultra ",
            img:"https://lzd-img-global.slatic.net/g/p/f52b07824a0546d26755d09a033ea4d4.jpg_200x200q80.jpg_.webp",
            price:"980.00",
            rate:"4.0",
        },
        {
            id:9,
            description:"Nintendo Switch OLED Model The Legend of Zelda Tears of the Kingdom Edition / เครื่อง OLED Zelda TOTK ",
            img:"https://lzd-img-global.slatic.net/g/p/0df302ed5a814d67d160bd3e3d7a482b.jpg_200x200q80.jpg_.webp",
            price:"13990.00",
            rate:"4.9",
        },
        {
            id:10,
            description:"HUAWEI ของแท้ สมาร์ทวอทช์ นาฬิกา smart watch แท้ นาฬิกาสมาร์ทwatch",
            img:"https://lzd-img-global.slatic.net/g/p/725ee2ea1471788058cdc6e648d4b7cd.jpg_200x200q80.jpg_.webp",
            price:"829.00",
            rate:"4.4",
        },
    ]
        const [name, setname] = useState("")
        useEffect(() => {
            const storedName = localStorage.getItem('name');
            if (storedName) {
                setname(storedName);
            }
        }, [])
        
        return (
            <div className="product-container">
                <div className="profile">
                    <h4>{name}</h4>
                    <Link to={"/"}><img src={"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}/></Link>
                    {props.clientId ? <GoogleLogout clientId={props.clientId} buttonText='Log out' onLogoutSuccess={props.logOut}/>:<p></p>} 
                </div>
                <div className="product">
                    {data.map((elm)=>{
                        return <Ietms id={elm.id} description={elm.description} price={elm.price} rate={elm.rate} img={elm.img}/>
                    })}
                </div>
            </div>
        )
}