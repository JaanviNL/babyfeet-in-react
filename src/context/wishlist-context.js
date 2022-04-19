import {createContext , useContext , useState} from "react";



const WishlistContext = createContext();

const WishlistProvider = ({children}) =>
{ 
     const [ wishlist , setwishlist] = useState([]);
    function onclickaddwishlist(item)
    {
  
    if(wishlist.find((wishlistItems) => wishlistItems._id === item._id))
    {
        setwishlist([...wishlist])
    }
   else
   {
    setwishlist([...wishlist , {
        _id:item._id,
        name: item.name,
        image:item.image,
        price: item.price,
        mrp:item.mrp,
        discount:item.discount,}])
   }
   
 
}
 function onclickremovewishlist(item)
 {

setwishlist([...wishlist.filter((removeWishlistItem) => removeWishlistItem._id !== item._id)]);
 }
    return (
        <WishlistContext.Provider value ={{onclickaddwishlist, wishlist ,onclickremovewishlist }}>
            {children}
        </WishlistContext.Provider>

    )
};

const useWishList = ()=>useContext(WishlistContext);

export { WishlistProvider , useWishList };