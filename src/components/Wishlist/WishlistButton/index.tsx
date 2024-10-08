import { FiHeart } from "react-icons/fi";

export default function WishlistButton() {

    return (
        <button className="w-12 h-12 rounded-full bg-c-grayscale-200 text-c-grayscale-900 absolute top-0 right-0 flex justify-center items-center hover:bg-c-pink-100  hover:text-c-red-500 transition-colors">
            <FiHeart size={25} className="mt-[2px]"/>
        </button>
    );
}