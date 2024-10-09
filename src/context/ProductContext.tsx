import React, { createContext, useState, useContext } from "react";
import type { ProductProviderProps } from "../utils/Provider";


interface ProductContextType {
    miniCartQuantity: number;
    wishListQuantity: number;
    toggleWishListItem: (item: string) => void;
    toggleMiniCartItem: (item: string) => void;

}

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {

    const [wishList, setWishList] = useState<string[]>([]);
    const [miniCart, setMiniCart] = useState<string[]>([]);
    const wishListQuantity = wishList.length;
    const miniCartQuantity = miniCart.length;

    const toggleWishListItem = (productId: string) => {
        setWishList((prevWishList) => {

            if (prevWishList.includes(productId)) {


                return prevWishList.filter((wishItem) => wishItem !== productId);
            } else {

                return [...prevWishList, productId];
            }
        });
    };

    const toggleMiniCartItem = (productId: string) => {
        setMiniCart((prevMiniCart) => {

            if (prevMiniCart.includes(productId)) {


                return prevMiniCart.filter((cartItem) => cartItem !== productId);
            } else {

                return [...prevMiniCart, productId];
            }
        });
    };

    const contextValue: ProductContextType = {
        wishListQuantity,
        miniCartQuantity,
        toggleWishListItem,
        toggleMiniCartItem
    };

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;

export const useProduct = () => {
    const context = useContext(ProductContext);


    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }

    return context;
};