import "../styles/wishlist.css";
import { useWishList } from "../context/wishlist-context";
import { useCart } from "../context/cart-context";

export default function WishList() {

  const { wishlist , onclickremovewishlist } = useWishList();
  const { cart , onclickaddcart } = useCart();
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
    <button  onClick ={()=>onclickaddcart(item)} className="card-btn">{ cart.find((cartItems) => cartItems._id === item._id) ? "Go to Cart" : "Add to Cart"}</button>
    <button class="card-btn remove-wishlist" onClick={() => onclickremovewishlist(item)}>Remove From Wishlist</button>

</div>
  )}
  </div>
  </div>
  </div>
    </>
  );
 }
