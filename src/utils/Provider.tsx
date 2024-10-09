import React, { ReactNode } from "react";
import ProductProvider from "../context/ProductContext";

export interface ProductProviderProps {
  children: ReactNode;
}

const Provider: React.FC<ProductProviderProps> = ({ children }) => {
  return (
    <ProductProvider>
      {children}
    </ProductProvider>
  );
};

export default Provider;