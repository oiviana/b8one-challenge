import ProductCard from "../ProductCard";
import { productMock } from "../mock";

const products = productMock.map((product) =>{
    return(
        <ProductCard
        productId={product.productId}
        productImage={product.productImage}
        productName={product.productName}
        productPrice={product.productPrice}
        key={product.productId}
        />
    )
})
export default function ProductGrid(){

    return(
        <div className="grid grid-cols-1 gap-6 xl:gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-[1816px] mx-auto">
          {products}
        </div>
    )
}