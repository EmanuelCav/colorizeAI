import Link from "next/link"

import { ButtonsHeaderPropsType } from "@/types/props.types"

const ButtonsAuthHeader = ({ router, pathname }: ButtonsHeaderPropsType) => {
    return (
        <div className="flex items-center justify-center">
            {
                pathname !== "/login" &&
                <Link href="/login" className="text-white font-semibod text-xl mx-6 hover:text-gray-300 active:text-white cursor-pointer select-none">Log in</Link>
            }
            {
                pathname !== "/register" &&
                <button className="bg-indigo-500 text-white mx-6 py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-200 font-semibold"
                    onClick={() => router.push('/register')}>
                    Sign up
                </button>
            }
        </div>
    )
}

export default ButtonsAuthHeader