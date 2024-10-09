import Logo from "../../assets/Icons/Logo";
import MiniCart from "../Cart/Minicart";
import WishlistCart from "../Wishlist/WishlistCart";

export default function Header() {

    return (
        <div className="w-full flex border-b-2 border-c-grayscale-200 max-w-[1750px] mx-auto h-20 px-3 justify-between">
            <Logo />
            <div className="flex gap-10">
                <WishlistCart />
                <MiniCart />
            </div>
        </div>
    );
}