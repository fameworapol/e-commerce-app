import Ietms from "./item"
import axios from "axios"
import '../style/itemstyle.css'
import { useLocation,Link } from "react-router-dom"
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useContext, useState,useEffect } from "react"
export default function Product(props) {
        const [product, setProduct] = useState([])
        const [name, setname] = useState("")
        useEffect(() => {
            getData()
            const storedName = sessionStorage.getItem('name');
            if (storedName) {
                setname(storedName);
            }
        }, [])
        
        function getData() {
            axios.get("http://localhost:8000/product/getAllProduct").then(response=>{
                setProduct(response.data)
            }).catch(err=>{
                console.log(err.error);
            })
        }

        return (
            <div className="product-container">
                <div className="product">
                    {product.map((elm)=>{
                        return <Ietms id={elm.id} description={elm.description} price={elm.price.toFixed(2)} rate={elm.rate} img={elm.img}/>
                    })}
                </div>
            </div>
        )
}