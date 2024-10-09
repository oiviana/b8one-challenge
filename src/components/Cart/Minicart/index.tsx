import { RiShoppingBag4Line } from "react-icons/ri";
import CartCount from "../../Commom/CartCount";
import { useProduct } from "../../../context/ProductContext";

export default function MiniCart() {
const {miniCartQuantity} = useProduct();
    return (
        <button className="text-c-grayscale-900 relative">
            <CartCount quantity={miniCartQuantity}/>
            <RiShoppingBag4Line
                size={40} />
        </button>
    )
}