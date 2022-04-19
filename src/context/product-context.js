import { createContext ,useState, useEffect ,useContext } from "react";
import axios from 'axios';



const ProductContext = createContext();

function ProductProvider({ children }) {

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
        <ProductContext.Provider value={ {product} }>
            {children}
        </ProductContext.Provider>
    );
}

const useProduct= ()=> useContext(ProductContext);

export { ProductContext, ProductProvider , useProduct };