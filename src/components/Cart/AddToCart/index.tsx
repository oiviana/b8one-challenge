import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export default function AddToCart() {
    const [selected, setSelected] = useState(false);
    const handleAddProduct = () => {
        setSelected(!selected)
    }

    return (
        <button className={`w-full h-12 flex justify-center gap-3 items-center bg-c-green-400 rounded text-c-grayscale-0 text-base font-bold uppercase hover:bg-c-green-600 transition-colors ${selected && 'bg-c-green-100 text-c-grayscale-900 hover:bg-c-green-400 transition-colors'}`}
            onClick={handleAddProduct}>
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