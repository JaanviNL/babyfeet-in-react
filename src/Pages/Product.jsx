import "../styles/store.css";
import "../components/Headerhome.css";
// import ProductImage from "../assests/p-1.webp";
import { useEffect, useState } from "react";
import axios from 'axios';
import Filters from "../components/Filters";

export default function Product() {

 
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
        const res = await axios.get("/api/products")
        
        setProduct(res.data.products)
        console.log(res.data.products)      
    }
    getProducts()
}, [])

  return (
    <div className="product-page">
     <Filters/>
      
      <div className="products">
        <div className="f-row">
          <p> Products (Showing {product.length} Products)</p>
          <select name="" id="" className="drop-down">
            <option value="">Sort By: Select</option>
            <option value="New Arrival">New Arrival</option>
            <option value="Price: High to Low">Price: High to Low</option>
            <option value="Price: Low to High">Price: Low to High</option>
          </select>
        </div>
        
        <div className="products-card">
        
    
      {product && product.map((item) => <div className="product-card">
            <span>
              <i className="far fa-heart card-icon"></i>
            </span>
            <img src={item.image} alt="Fashion" />

            <p className="info"> {item.name}</p>
            <p className=" info price">
              {item.price} <span className="strike">{item.mrp}</span> {item.discount}
            </p>
            <button className="card-btn">Add to Cart</button>
          </div>)}
          
        </div>
      </div>
    </div>
  );
}
