type CartCountProps = {
    quantity: number;
}

export default function CartCount({quantity}:CartCountProps) {

    return (
        <span className="bg-c-grayscale-900 rounded-full w-5 h-5 text-sm text-c-grayscale-0 absolute top-[10px] right-0 flex items-center justify-center font-semibold">
            {quantity}
        </span>
    );
}