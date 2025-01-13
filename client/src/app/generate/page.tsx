'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"

import FormGenerate from "@/components/generate/FormGenerate"
import TitleGenerate from "@/components/generate/TitleGenerate"
import ImageGenerated from "@/components/generate/ImageGenerated"

import { userStore } from "@/server/store/user.store"
import { imageStore } from "@/server/store/image.store"

const Generate = () => {

    const user = userStore()
    const image = imageStore()

    const router = useRouter()

    const [imageUrl, setImageUrl] = useState<string | null>(null)

    const handleGenerateAnother = () => {
        if (!user.isLoggedIn) {
            router.push("/register")
            return
        }

        setImageUrl(null)
    }

    return (
        <div className="h-screen ml-0 lg:ml-64 justify-center items-center flex flex-col p-2 md:p-0">
            {
                imageUrl ? <ImageGenerated imageUrl={imageUrl} imageId={image.image._id!} token={user.user.token!}
                handleGenerateAnother={handleGenerateAnother} isLoggedIn={user.isLoggedIn} getImage={image.getImage} /> :
                    <>
                        <TitleGenerate />
                        <FormGenerate setImageUrl={setImageUrl} isLoggedIn={user.isLoggedIn} getImage={image.getImage} token={user.user.token!} />
                    </>
            }
        </div>
    )
}

export default Generate