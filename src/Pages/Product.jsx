import "../styles/store.css";
import "../components/Headerhome.css";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";

import { useProduct } from "../context/product-context";

import { useCart } from "../context/cart-context";



export default function Product() {

 const { product } = useProduct();
 
 const { state , dispatch} = useCart();
  const {cart  , wishlist} = state;

 
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
               <button className="card-wishlist-icon" onClick={()=>dispatch({type:'Add-wishlist',payload:(item)})}>
              { wishlist.find((wishlistItems) => wishlistItems._id === item._id) ? (
                <i className=" fa fa-solid fa-heart "></i>
              ) : (
                <i className="far fa-heart "></i>
              )}
              </button>
            </span>
            <img src={item.image} alt="Fashion" />

            <p className="info"> {item.name}</p>
            <p className=" info price">
            ₹{item.price} <span className="strike">₹{item.mrp}</span> {item.discount}
            </p>
            { cart.find((cartItems) => cartItems._id === item._id) ? <Link to ="/cart" className="card-btn-link"><button className="card-btn">Go To Cart</button></Link> : <button  onClick ={()=>dispatch({type:'Add-to-cart',payload:(item)})} className="card-btn">Add To Cart</button>}



            {/* // <button  onClick ={()=>dispatch({type:'Add-to-cart',payload:(item)})} className="card-btn">{ cart.find((cartItems) => cartItems._id === item._id) ? "Go to Cart" : "Add to Cart"}</button> */}
          </div>)}
          
        </div>
      
      </div>
    </div>
  );
}
