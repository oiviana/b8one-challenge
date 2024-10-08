import ProductCard from "../ProductCard";

export default function ProductGrid(){

    return(
        <div className="grid grid-cols-1 gap-6 xl:gap-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full max-w-[1816px] mx-auto">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    )
}