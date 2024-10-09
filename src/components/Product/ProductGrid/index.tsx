import ProductCard from "../ProductCard";
import { productMock } from "../mock";

const products = productMock.map((product) => {
    return (
        <ProductCard
            productId={product.productId}
            imageAlt={product.imageAlt}
            imageSrc={product.imageSrc}
            productName={product.productName}
            productPrice={product.productPrice}
            key={product.productId}
        />
    )
})
export default function ProductGrid() {

    return (
        <div className="grid grid-cols-1 gap-6 xl:gap-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,_minmax(304px,_1fr))] w-full max-w-[1816px] mx-auto mt-32 px-4">
            {products}
        </div>
    )
}