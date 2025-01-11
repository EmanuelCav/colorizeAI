import { AiOutlineAppstore } from "react-icons/ai"
import { FiCompass } from "react-icons/fi"
import { BsClockHistory } from "react-icons/bs"
import { RiMagicLine } from "react-icons/ri"

import NavItem from "./components/NavItem"

const Navigation = () => {
    return (
        <nav className="w-64 bg-indigo-900 flex flex-col h-full fixed">
            <div className="p-4 text-lg font-semibold border-b border-indigo-800">
                Navigation
            </div>
            <ul className="flex-1 p-2 space-y-4">
                <NavItem
                    Icon={RiMagicLine}
                    text="Generate"
                    href="/generate"
                />
                <NavItem
                    Icon={FiCompass}
                    text="Explore"
                    href="/explore"
                />
                <NavItem
                    Icon={BsClockHistory}
                    text="History"
                    href="/history"
                />
                <NavItem
                    Icon={AiOutlineAppstore}
                    text="Dashboard"
                    href="/dashboard"
                />
            </ul>
            <div className="p-4 text-sm text-gray-400 border-t border-gray-700">
                © 2025 My App
            </div>
        </nav>
    );
};

export default Navigation