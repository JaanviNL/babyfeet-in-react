import { useCart } from "../context/cart-context";
import "../styles/cart.css";
import { useWishList } from "../context/wishlist-context";
import emptycart from "../assests/emptycart.jpg";


export default function Cart() {
  const { cart, onclickremovecart, increasecount,decreasecount ,totalprice,totalmrp } = useCart();
  const { wishlist , onclickaddwishlist } = useWishList();
  const savings = totalmrp-totalprice;

    return (
      <>{cart.length === 0 && <img className="emptycart" src={emptycart} alt="emptycart"></img>}
         <div class="cart-page">

<div class="cart-card">

  { cart && cart.map((item)=>
    <div class="horizontal-card">
        <div class="img-with-text">
            <img src={item.image} class="horizontal-img" alt="cart-product"/>
            <div class=" horizontal-text ">
                <p class="card-info info">{item.name}
                </p>
                <p class="sub-title info-price">₹{item.price} <span class="strike">₹{item.mrp}</span> {item.discount}</p>
                <div class="qty">Qty:
                    <button onClick={()=>increasecount(item)} class="input-btn">+</button>
                    <input class="input-qty" value={item.count}></input>
                    <button onClick={()=>decreasecount(item)} class="input-btn">-</button>
                </div>
                
            </div>
        </div>

        <div class="text-button">
            
            <button className="card-btn btn-cart" onClick={()=>onclickaddwishlist(item)}>
              { wishlist.find((wishlistItems) => wishlistItems._id === item._id) ? "Already in Wishlist" : "Add to Wishlist"}
              </button>
            <button  onClick ={()=>onclickremovecart(item)} class="card-btn btn-cart remove-wishlist">Remove</button>
          </div>
    </div>
  )}
</div>
{totalmrp >0 && <div class="checkout">
    <div class="chkout-card">
        <h3>Price Details:</h3>

        <div class="flex-row">
            <p>Price:</p>
            <p>{totalmrp}</p>
        </div>
        <div class="flex-row">
            <p>Discounted Price:</p>
            <p>{totalprice}</p>
        </div>
        <div class="flex-row">
            <p>Savings:</p>
            <p>{savings}</p>
        </div>
        <div class="flex-row">
            <p>Delivery Charges:</p>
            <p>FREE</p>
        </div>
        <hr></hr>
        <div class="flex-row">
            <p> Total Amount:</p>
            <p>{totalprice}</p>
        </div>
        <button class="card-btn">Place Order</button>
    </div>
</div>}

</div>
      </>
    );
  }
  