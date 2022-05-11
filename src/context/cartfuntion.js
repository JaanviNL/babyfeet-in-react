

export function cartfuntion(state, action) {
  
    const { cart , totalmrp , totalprice ,wishlist} = state;
    const cartpresent = cart.find((cartItems) => cartItems._id === action.payload._id);
    const wishlistpresent = wishlist.find((wishlistItems) => wishlistItems._id === action.payload._id);
    switch (action.type) {
        case 'Add-wishlist':
            if(wishlistpresent)
            return {...state};
            else
            return{...state,
                wishlist:[...wishlist , {
                            _id:action.payload._id,
                            name: action.payload.name,
                            image:action.payload.image,
                            price: action.payload.price,
                            mrp:action.payload.mrp,
                            discount:action.payload.discount,
                        count:action.payload.count}]

            };
            case 'Remove-wishlist':
                
                return {...state ,
                wishlist:[...wishlist.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id)]
            };
        case 'Add-to-cart':
            if (cartpresent)
                return {...state};
            else {
                return {
                    ...state,
                    cart: [...cart, {
                        _id: action.payload._id,
                        name: action.payload.name,
                        image: action.payload.image,
                        price: action.payload.price,
                        mrp: action.payload.mrp,
                        discount: action.payload.discount,
                        count: action.payload.count
                    }],
                    totalprice: (Number(action.payload.price) + Number(totalprice)),
                    totalmrp: (Number(action.payload.mrp) + totalmrp)
                };
            };

        case 'Remove-from-cart':
            return {
                ...state,
                cart: cart.filter((removeWishlistItem) => removeWishlistItem._id !== action.payload._id),
                totalprice: totalprice - ((action.payload.count) * Number(action.payload.price)),
                totalmrp: totalmrp - ((action.payload.count) * Number(action.payload.mrp))
            };
        case 'Increase-count':
            return {
                ...state,
                cart: cart.map(p => p._id === action.payload._id
                    ? { ...p, count: action.payload.count + 1 }
                    : p
                ),
                totalprice: Number(action.payload.price) + totalprice,
                totalmrp: Number(action.payload.mrp) + totalmrp,
            };
        case 'Decrease-count':
            return {
                ...state,
                cart: cart.map(p => p._id === action.payload._id
                    ? { ...p, count: action.payload.count - 1 }
                    : p
                ),
                totalprice: totalprice - Number(action.payload.price),
                totalmrp: totalmrp - Number(action.payload.mrp),
            };
        default:
            return state;
    }

}
