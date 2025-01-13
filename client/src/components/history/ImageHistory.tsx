import Image from "next/image"

import ActionsHistory from "./components/ActionsHistory"

import { ImageHistoryPropsType } from "@/types/history.types"

import { saveImageGeneratedApi } from "@/server/api/image.api"

const ImageHistory = ({ img, getImage, token, updateImage }: ImageHistoryPropsType) => {

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

      const data = await saveImageGeneratedApi({save: true}, img._id!, token)
      getImage(data.image)
      updateImage(data.image)

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="relative my-4 h-full flex flex-col items-center justify-center bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
      <div className="h-72 w-full relative">
        <Image
          src={img.image!}
          alt="image"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <ActionsHistory handleDownload={handleDownload} handleSave={handleSave} isSaved={img.isSaved!} />
    </div>
  )
}


export default ImageHistory