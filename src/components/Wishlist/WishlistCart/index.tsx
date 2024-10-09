import { TbShoppingCartHeart } from "react-icons/tb";
import CartCount from "../../Commom/CartCount";
import { useProduct } from "../../../context/ProductContext";

export default function WishlistCart() {
    const { wishListQuantity } = useProduct();
    return (
        <button className="text-c-grayscale-900 relative">
            <CartCount quantity={wishListQuantity}/>
            <TbShoppingCartHeart
                size={40} />
        </button>
    )
}