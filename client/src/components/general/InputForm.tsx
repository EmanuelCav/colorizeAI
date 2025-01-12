import { InputFormPropsType } from "@/types/props.types"

const InputForm = ({ type, label, name, register, autoComplete, autoFocus, max, errors }: InputFormPropsType) => {
    return (
        <div className="w-full my-2">
            {
                errors && <p className="text-red-500 text-xs italic mb-2">{errors.message}</p>
            }
            <label
                htmlFor={label}
                className="block text-sm font-medium text-gray-700 mb-2 ml-1"
            >
                {label}
            </label>
            <input
                {...register}
                type={type}
                id={label}
                name={name}
                placeholder={label}
                className={`block w-full py-3 px-4 border-2 rounded-md focus:outline-none ${errors ? "border-red-500" : "border-indigo-500"}`}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                max={max}
            />
        </div>
    )
}

export default InputForm