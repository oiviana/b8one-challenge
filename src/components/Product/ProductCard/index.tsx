import AddToCart from "../../Cart/AddToCart";
import WishlistButton from "../../Wishlist/WishlistButton";

export default function ProductCard({ productId, imageAlt, imageSrc, productName, productPrice }: ProductData) {
    const { sellingPrice, listPrice, installments } = productPrice
    const parceledPrice = sellingPrice / installments

    return (
        <div className="bg-c-grayscale-0 w-full max-w-[304px] h-[568px] p-7 flex flex-col rounded-lg shadow-md mx-auto">
            <div className="relative w-full h-auto max-h-60  max-w-60 overflow-hidden ">
                <img src={imageSrc} alt={imageAlt} />
                <WishlistButton />
            </div>
            <div className="flex flex-col self-end items-start gap-6 flex-1  justify-between">
                <span className="text-sm text-c-grayscale-900 font-medium mt-4 overflow-hidden text-ellipsis line-clamp-[4] max-h-20">
                    {productName}
                </span>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-c-grayscale-600 line-through">R$ {listPrice}</span>
                    <span className="text-xl font-semibold text-c-red-500">R$ {sellingPrice}</span>
                    <span className="text-xs text-c-grayscale-900">em até<b> {installments}x de R$ {parceledPrice}</b>sem juros</span>
                </div>
                <AddToCart />
            </div>
        </div>
    )
}