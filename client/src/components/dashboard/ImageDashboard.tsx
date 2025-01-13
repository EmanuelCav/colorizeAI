import Image from "next/image"

import ActionsDashboard from "./components/ActionsDashboard"

import { saveImageGeneratedApi } from "@/server/api/image.api"

import { ImageDashboardPropsType } from "@/types/dashboard.types"

const ImageDashboard = ({ img, token, quitImage }: ImageDashboardPropsType) => {

    const handleDownload = async () => {
        const response = await fetch(img.image!)
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement("a")
        link.href = url
        link.download = "colorize_ai_image.jpg"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        window.URL.revokeObjectURL(url)
    }

    const handleSave = async () => {

        try {

            const data = await saveImageGeneratedApi({ save: false }, img._id!, token)
            quitImage(data.image)

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="relative mt-2 h-full flex flex-col bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
            <div className="h-72 w-72 w-full relative">
                <Image
                    src={img.image!}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                />
            </div>
            <ActionsDashboard handleDownload={handleDownload} handleSave={handleSave} />
        </div>
    )
}


export default ImageDashboard