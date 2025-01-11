import { InputFormPropsType } from "@/types/props.types"

const InputForm = ({ type, id, name, register, autoComplete, autoFocus, max }: InputFormPropsType) => {
    return (
        <div className="w-full my-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 mb-2 ml-1"
            >
                {id}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                placeholder={id}
                className="block w-full py-3 px-4 border-2 border-indigo-500 rounded-md focus:outline-none"
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                max={max}
            />
        </div>
    )
}

export default InputForm