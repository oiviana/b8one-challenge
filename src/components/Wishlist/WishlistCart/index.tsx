import { TbShoppingCartHeart } from "react-icons/tb";
import CartCount from "../../Commom/CartCount";

export default function WishlistCart() {

    return (
        <button className="text-c-grayscale-900 relative">
            <CartCount quantity={4}/>
            <TbShoppingCartHeart
                size={40} />
        </button>
    )
}