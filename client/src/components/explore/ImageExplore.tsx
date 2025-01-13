import Image from "next/image"

import { IImage } from "@/interface/Image"

const ImageExplore = ({ img }: { img: IImage }) => {
    return (
        <div className="relative flex flex-col bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-64 w-full">
                <Image
                    src="/logo.png"
                    alt={img.title!.slice(0, 15)}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <div className="p-3 text-center bg-gray-100">
                {/* <p className="text-gray-800 font-semibold">Done by: {img.user?.username}</p> */}
                <p className="text-gray-800 font-semibold">Done by: Emanuel</p>
            </div>
        </div>
    )
}

export default ImageExplore