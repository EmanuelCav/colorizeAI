'use client'

import { usePathname } from "next/navigation";
import { AiOutlineAppstore } from "react-icons/ai"
import { FiCompass } from "react-icons/fi"
import { BsClockHistory } from "react-icons/bs"
import { RiMagicLine } from "react-icons/ri"

import NavItem from "./components/navigation/NavItem"
import NavFooter from "./components/navigation/NavFooter";

import { userStore } from "@/server/store/user.store";

const Navigation = () => {

    const pathname = usePathname()
    const user = userStore()

    return (
        <nav className={`w-64 bg-indigo-900 hidden lg:flex flex-col h-full fixed z-10 ${(pathname === "/register" || pathname === "/login") && "hidden"}`}>
            <ul className="flex-1 p-2 space-y-4 mt-20">
                <NavItem
                    Icon={RiMagicLine}
                    text="Generate"
                    href="/generate"
                    pathname={pathname}
                />
                <NavItem
                    Icon={FiCompass}
                    text="Explore"
                    href="/explore"
                    pathname={pathname}
                />
                {
                    user.isLoggedIn &&
                    <NavItem
                        Icon={BsClockHistory}
                        text="History"
                        href="/history"
                        pathname={pathname}
                    />
                }
                {
                    user.isLoggedIn &&
                    <NavItem
                        Icon={AiOutlineAppstore}
                        text="Dashboard"
                        href="/dashboard"
                        pathname={pathname}
                    />
                }
            </ul>
            <NavFooter />
        </nav>
    );
};

export default Navigation