import { createContext } from "react";
import { productData } from "../constants";

export const ProductContext = createContext();

const currency = "$";
const delivery_fee = 10;


const value = {
    productData,
    currency,
    delivery_fee,
}

const ProductContextProvider = (props) => {
    return (
        <ProductContext.Provider value={value}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;
