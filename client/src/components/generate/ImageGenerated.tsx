import Image from "next/image"

import { ImageGeneratedPropsType } from "@/types/generate.types"

const ImageGenerated = ({ imageUrl, handleGenerateAnother }: ImageGeneratedPropsType) => {
  return (
    <div className="max-w-lg">
      <Image src={imageUrl} alt="image-generated" width={600} height={600} />
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