import "../styles/wishlist.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart-context";

export default function WishList() {

 
  const { state , dispatch} = useCart();
  const { cart ,wishlist } = state;
  return (
    <>
    <div className="product-page">
      <div className="wishlist-p">
       <h2 className="center"> My Wishlist</h2>

<div class="products-card-w">

  { wishlist && wishlist.map((item)=>
  
    <div class="product-card">
    <span><i class="fas fa fa-heart card-icon wishlist"></i></span>
    <img src={item.image} alt ="Wishlist"/>
    <p class="info"> {item.name}</p>
    <p class=" info price">₹{item.price} <span class="strike">₹{item.mrp}</span>{item.discount}</p>
    { cart.find((cartItems) => cartItems._id === item._id) ? <Link to ="/cart" className="card-btn-link"><button className="card-btn">Go To Cart</button></Link> : <button  onClick ={()=>dispatch({type:'Add-to-cart',payload:(item)})} className="card-btn">Add To Cart</button>}
    <button class="card-btn remove-wishlist" onClick={()=>dispatch({type:'Remove-wishlist',payload:(item)})}>Remove From Wishlist</button>

</div>
  )}
  </div>
  </div>
  </div>
    </>
  );
 }
