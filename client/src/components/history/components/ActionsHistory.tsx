import { MdOutlineFileDownload, MdSave } from "react-icons/md";

import { ActionsHistoryPropsType } from "@/types/history.types";

const ActionsHistory = ({ handleDownload, handleSave, isSaved }: ActionsHistoryPropsType) => {
    return (
        <div className="p-4 w-full flex justify-evenly items-center">
            <div className="flex flex-col items-center justify-center">
                <MdOutlineFileDownload size={32} onClick={handleDownload}
                    className="text-indigo-500 hover:bg-gray-200 active:bg-gray-100 cursor-pointer" />
                <p className="text-indigo-500 text-md">Download</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                {
                    isSaved ? (
                        <MdSave size={32}
                            className="text-emerald-500" />
                    ) : (
                        <>
                            <MdSave size={32} onClick={handleSave}
                                className="text-indigo-500 hover:bg-gray-200 active:bg-gray-100 cursor-pointer" />
                            <p className="text-indigo-500 text-md">Save</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default ActionsHistory