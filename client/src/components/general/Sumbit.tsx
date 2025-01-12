import { SumbitPropsType } from "@/types/props.types"

const Sumbit = ({ text, isDisabled }: SumbitPropsType) => {
    return (
        <button
            disabled={isDisabled}
            type="submit"
            className={`${isDisabled ? "bg-gray-300" : "bg-indigo-500"} mt-4 w-full text-white py-2 px-4 rounded-md 
            ${!isDisabled && "hover:bg-indigo-600"} transition duration-200 font-semibold`}
        >
            {text}
        </button>
    )
}

export default Sumbit