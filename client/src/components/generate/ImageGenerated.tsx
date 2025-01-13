'use client'

import Image from "next/image"
import { useState } from "react"

import ActionsImage from "./components/ActionsImage"

import { saveImageGeneratedApi } from "@/server/api/image.api"

import { ImageGeneratedPropsType } from "@/types/generate.types"

const ImageGenerated = ({ imageUrl, handleGenerateAnother, isLoggedIn, imageId, token, getImage }: ImageGeneratedPropsType) => {

  const [isSaved, setIsSaved] = useState<boolean>(false)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = imageUrl
    link.download = "colorize_ai_image.jpg"
    link.click()
  }

  const handleSave = async () => {

    try {

      const data = await saveImageGeneratedApi({ save: true }, imageId, token)
      getImage(data.image)
      setIsSaved(true)

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div className="max-w-lg">
      <Image src={imageUrl} alt="image-generated" width={600} height={600} />
      <ActionsImage handleDownload={handleDownload} handleSave={handleSave} isLoggedIn={isLoggedIn} isSaved={isSaved} />
      <button
        onClick={handleGenerateAnother}
        className="mt-4 w-full bg-indigo-500 text-white px-4 py-2 text-lg rounded-md hover:bg-indigo-600 transition duration-200 font-semibold"
      >
        Generate another image
      </button>
    </div>
  )
}

export default ImageGenerated