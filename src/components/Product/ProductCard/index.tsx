import AddToCart from "../../Cart/AddToCart";
import WishlistButton from "../../Wishlist/WishlistButton";
import { formatPrice } from '../../../utils/formatPrice';

export default function ProductCard({ productId, imageAlt, imageSrc, productName, productPrice }: ProductData) {
    const { sellingPrice, listPrice, installments } = productPrice
    const parceledPrice = Math.ceil((sellingPrice / installments) * 100) / 100;

    return (
        <div className="bg-c-grayscale-0 w-full max-w-[304px] h-[568px] p-7 flex flex-col rounded-lg hover:shadow-md transition-shadow cursor-pointer mx-auto">
            <div className="relative w-full h-auto max-h-60  max-w-60 overflow-hidden ">
                <img src={imageSrc} alt={imageAlt} />
                <WishlistButton productId={productId} />
            </div>
            <div className="flex flex-col self-end items-start gap-6 flex-1  justify-between">
                <span className="text-sm text-c-grayscale-900 font-medium mt-4 overflow-hidden text-ellipsis line-clamp-[4] max-h-20">
                    {productName}
                </span>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-c-grayscale-600 line-through font-medium">{formatPrice(listPrice)}</span>
                    <span className="text-xl font-semibold text-c-red-500">{formatPrice(sellingPrice)}</span>
                    <span className="text-xs text-c-grayscale-700">em até<b className="text-c-grayscale-900"> {installments}x de {formatPrice(parceledPrice)}</b> sem juros</span>
                </div>
                <AddToCart productId={productId}/>
            </div>
        </div>
    )
}