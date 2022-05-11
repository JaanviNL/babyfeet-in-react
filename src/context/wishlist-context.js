import {createContext , useContext } from "react";
import { useCart } from "./cart-context";



const WishlistContext = createContext();

const WishlistProvider = ({children}) =>
{ 
     const {state} = useCart();
     const { wishlist } = state;
//          function onclickaddwishlist(item)
//     {
  
//     if(wishlist.find((wishlistItems) => wishlistItems._id === item._id))
//     {
//         setwishlist([...wishlist])
//     }
//    else
//    {
//     setwishlist([...wishlist , {
//         _id:item._id,
//         name: item.name,
//         image:item.image,
//         price: item.price,
//         mrp:item.mrp,
//         discount:item.discount,
//     count:item.count}])
//    }
   
 
// }
//  function onclickremovewishlist(item)
//  {

// setwishlist([...wishlist.filter((removeWishlistItem) => removeWishlistItem._id !== item._id)]);
//  }
    return (
        <WishlistContext.Provider value ={{ wishlist }}>
            {children}
        </WishlistContext.Provider>

    )
};

const useWishList = ()=>useContext(WishlistContext);

export { WishlistProvider , useWishList };