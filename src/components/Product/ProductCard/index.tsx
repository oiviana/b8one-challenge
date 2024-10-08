import AddToCart from "../../Cart/AddToCart";
import WishlistButton from "../../Wishlist/WishlistButton";

export default function ProductCard() {

    return (
        <div className="bg-c-grayscale-0 w-full max-w-[304px] h-[568px] p-7 flex flex-col  rounded-lg shadow-md">
            <div className="relative w-60 h-60 overflow-hidden ">
                <img src="/mock/product1.png" alt="teste" />
                <WishlistButton/>
            </div>
            <div className="flex flex-col self-end items-start gap-6 flex-1  justify-between">
                <span className="text-sm text-c-grayscale-900 font-medium mt-4 overflow-hidden text-ellipsis line-clamp-[4] max-h-20">
                    Monitor LED 27'' Gamer Curvo Samsung  1920 x 1080 FHD 240 Hz HDMI, DP, Gsync Série CRG50
                </span>
                <div className="flex flex-col gap-1">
                    <span className="text-sm text-c-grayscale-600 line-through">R$ 2.813,99</span>
                    <span className="text-xl font-semibold text-c-red-500">R$ 2.599,00</span>
                    <span className="text-xs text-c-grayscale-900">em até<b> 10x de R$ 259,90 </b>sem juros</span>
                </div>
                <AddToCart />
            </div>
        </div>
    )
}