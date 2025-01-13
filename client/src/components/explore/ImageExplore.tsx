import Image from "next/image"

import { IImage } from "@/interface/Image"

const ImageExplore = ({ img }: { img: IImage }) => {
    return (
        <div className="relative mt-2 h-full flex flex-col bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-72 w-72 relative">
                <Image
                    src={img.image!}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-4 flex flex-col items-center">
                <p className="text-indigo-500 font-semibold">Done by: {img.user?.username}</p>
            </div>
        </div>
    )
}


export default ImageExplore