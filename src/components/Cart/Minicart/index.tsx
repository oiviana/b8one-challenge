import { RiShoppingBag4Line } from "react-icons/ri";
import CartCount from "../../Commom/CartCount";

export default function MiniCart() {

    return (
        <button className="text-c-grayscale-900 relative">
            <CartCount quantity={2}/>
            <RiShoppingBag4Line
                size={40} />
        </button>
    )
}