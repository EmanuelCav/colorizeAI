import { MdOutlineFileDownload, MdSave } from "react-icons/md";

import { ActionsImagePropsType } from "@/types/generate.types";

const ActionsImage = ({ handleDownload, handleSave, isLoggedIn, isSaved }: ActionsImagePropsType) => {
    return (
        <div className="w-full flex justify-evenly items-center mt-2">
            <div className="flex flex-col items-center justify-center">
                <MdOutlineFileDownload size={32} onClick={handleDownload}
                    className="text-indigo-500 hover:bg-gray-200 active:bg-gray-100 cursor-pointer" />
                <p className="text-indigo-500 text-md">Download</p>
            </div>
            {
                isLoggedIn &&
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
            }
        </div>
    )
}

export default ActionsImage