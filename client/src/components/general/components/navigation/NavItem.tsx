import Link from "next/link"

import { NavItemPropsType } from "@/types/props.types"

const NavItem = ({ Icon, text, href, pathname }: NavItemPropsType) => {
    return (
        <li>
            <Link
                href={href}
                className={`flex items-center space-x-4 px-2 py-3 
                    ${pathname === href ? "bg-indigo-700" : "bg-indigo-900"} 
                    hover:bg-indigo-700 
                    ${pathname === href ? "bg-indigo-700" : "active:bg-indigo-900"}`
                }
            >
                <Icon size={24} color="#ffffff" />
                <p className="text-lg text-white">{text}</p>
            </Link>
        </li>
    )
}

export default NavItem