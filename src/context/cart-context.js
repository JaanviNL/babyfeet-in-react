import {createContext , useContext } from "react";
import { useReducer } from "react";
import { cartfuntion } from "./cartfuntion";

const CartContext = createContext();

const useCart =()=> useContext(CartContext);
 function CartProvider({ children }) {
     
    const [state, dispatch] = useReducer(cartfuntion, {
        cart: [],
        wishlist:[],
        totalmrp: 0,
        totalprice: 0,
    });
   
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
}
    
export { useCart , CartProvider };
