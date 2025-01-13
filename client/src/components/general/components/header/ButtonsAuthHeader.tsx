import Link from "next/link"
import { IoMdLogOut } from "react-icons/io";
import { MdMenu } from "react-icons/md";

import { ButtonsHeaderPropsType } from "@/types/props.types"

const ButtonsAuthHeader = ({ router, pathname, isLoggedIn, setIsMenu, isMenu, logout }: ButtonsHeaderPropsType) => {

    const logoutAction = () => {
        logout()
        router.push("/generate")
    }

    return (
        <div className="flex items-center justify-center">
            {
                isLoggedIn ? (
                    <IoMdLogOut size={32} color="#ffffff" onClick={logoutAction}
                    className="hidden lg:block mx-2 cursor-pointer hover:bg-indigo-800 active:bg-indigo-900" />
                ) : (
                    <div className="hidden lg:block">
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
            <MdMenu size={32} color="#ffffff" onClick={() => setIsMenu(!isMenu)}
            className="block lg:hidden cursor-pointer mx-2 hover:bg-indigo-800 active:bg-indigo-900" />
        </div>
    )
}

export default ButtonsAuthHeader