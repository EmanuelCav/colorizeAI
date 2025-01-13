import Link from "next/link"

import { NavMenuPropsType } from "@/types/props.types"

const NavMenu = ({ Icon, setIsMenu, href, title }: NavMenuPropsType) => {
    return (
        <Link
            href={href}
            className="flex items-center px-6 py-4 text-white text-lg hover:bg-indigo-800"
            onClick={() => setIsMenu(false)}
        >
            <Icon size={24} className="mr-4" />
            {title}
        </Link>
    )
}

export default NavMenu