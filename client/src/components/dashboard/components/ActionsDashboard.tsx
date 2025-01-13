import { MdOutlineFileDownload, MdClose } from "react-icons/md";

import { ActionsDashboardPropsType } from "@/types/dashboard.types";

const ActionsDashboard = ({ handleDownload, handleSave }: ActionsDashboardPropsType) => {
    return (
        <div className="p-4 w-full flex justify-evenly items-center">
            <div className="flex flex-col items-center justify-center">
                <MdOutlineFileDownload size={32} onClick={handleDownload}
                    className="text-indigo-500 hover:bg-gray-200 active:bg-gray-100 cursor-pointer" />
                <p className="text-indigo-500 text-md">Download</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <MdClose size={32} className="text-red-500 hover:bg-gray-200 active:bg-gray-100 cursor-pointer" onClick={handleSave} />
                <p className="text-red-500 text-md">Quit</p>
            </div>
        </div>
    )
}

export default ActionsDashboard