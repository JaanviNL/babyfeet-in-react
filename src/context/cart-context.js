import {createContext , useContext , useState} from "react";

const CartContext = createContext();

const useCart =()=> useContext(CartContext);

 const CartProvider =({children})=>
 {

    const [cart , setcart] =useState([]);
    const [totalprice, settotalprice ] = useState(0);
    const [ totalmrp , settotalmrp] = useState(0);
 

    function increasecount(item)
    {

        setcart(cart.map(p =>
            p._id === item._id
              ? { ...p, count:item.count+ 1 }
              : p
          ))
    
          settotalprice(Number(item.price) +Number(totalprice));
          settotalmrp(Number(item.mrp)+ totalmrp);
    }
    function decreasecount(item)
    {
        setcart(cart.map(p =>
            p._id === item._id
              ? { ...p, count:item.count- 1 }
              : p
          ))
          settotalprice(totalprice - Number(item.price) );
          settotalmrp(totalmrp-Number(item.mrp));
    }
    function onclickaddcart(item)
    {
  
    if(cart.find((cartItems) => cartItems._id === item._id))
    {
        setcart([...cart])
    }
   else
   {
    setcart([...cart , {
        _id:item._id,
        name: item.name,
        image:item.image,
        price: item.price,
        mrp:item.mrp,
        discount:item.discount,
    count:item.count}])
    settotalprice(Number(item.price) +Number(totalprice));
    settotalmrp(Number(item.mrp)+ totalmrp);
   }
   
 
}
 function onclickremovecart(item)
 {

setcart([...cart.filter((removeWishlistItem) => removeWishlistItem._id !== item._id)]);
settotalprice(totalprice - ((item.count) * Number(item.price)) );
settotalmrp(totalmrp-((item.count) * Number(item.mrp)));
 }
     return(
         <CartContext.Provider value ={{cart , onclickaddcart, onclickremovecart ,increasecount , decreasecount , totalprice, totalmrp}}>
             {children}
             </CartContext.Provider>
     )
 }
    
export { useCart , CartProvider };
