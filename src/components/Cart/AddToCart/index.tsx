import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { useProduct } from "../../../context/ProductContext";

type AddToCartProps = {
    productId: string;
}

export default function AddToCart({productId}:AddToCartProps) {

    const [selected, setSelected] = useState(false);
    const { toggleMiniCartItem } = useProduct();

    const handleAddProduct = (id:string) => {
        setSelected(!selected)
        toggleMiniCartItem(id)
    }

    return (
        <button className={`w-full h-12 flex justify-center gap-3 items-center bg-c-green-400 rounded text-c-grayscale-0 text-base font-bold uppercase hover:bg-c-green-600 transition-colors ${selected && '!bg-c-green-100 text-c-grayscale-900 transition-colors'}`}
            onClick={() => handleAddProduct(productId)}>
            {selected ? (
                <>
                    <FaCheck size={20} />
                    Adicionado
                </>
            ) : (
                'Adicionar'
            )}
        </button>
    )
}