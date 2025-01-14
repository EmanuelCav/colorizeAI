import { IoMdLogOut } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai"
import { FiCompass } from "react-icons/fi"
import { BiLogIn } from "react-icons/bi";
import { BsClockHistory } from "react-icons/bs"
import { RiMagicLine } from "react-icons/ri"

import NavMenu from "./components/NavMenu";

import { MenuPropsType } from "@/types/props.types";

const Menu = ({ setIsMenu, isLoggedIn, logout, router }: MenuPropsType) => {

    const logoutAction = () => {
        logout()
        setIsMenu(false)
        router.push("/generate")
    }

    return (
        <div className="lg:hidden fixed top-0 left-0 w-3/4 h-full bg-indigo-900 shadow-lg z-30 flex flex-col">
            <nav className="flex flex-col mt-4">
                <NavMenu Icon={RiMagicLine} setIsMenu={setIsMenu} href="/generate" title="Generate" />
                <NavMenu Icon={FiCompass} setIsMenu={setIsMenu} href="/explore" title="Explore" />
                {
                    isLoggedIn && <NavMenu Icon={BsClockHistory} setIsMenu={setIsMenu} href="/history" title="History" />
                }
                {
                    isLoggedIn && <NavMenu Icon={AiOutlineAppstore} setIsMenu={setIsMenu} href="/dashboard" title="Dashboard" />
                }
                {
                    !isLoggedIn && <NavMenu Icon={BiLogIn} setIsMenu={setIsMenu} href="/login" title="Log in" />
                }
                {
                    !isLoggedIn && <NavMenu Icon={IoPersonAddSharp} setIsMenu={setIsMenu} href="/register" title="Sign up" />
                }
                {
                    isLoggedIn && <div
                        className="flex items-center px-6 py-4 text-white text-lg hover:bg-indigo-800 cursor-pointer"
                        onClick={logoutAction}
                    >
                        <IoMdLogOut size={24} className="mr-4" />
                        Logout
                    </div>
                }
            </nav>
        </div>
    );
};

export default Menu;
