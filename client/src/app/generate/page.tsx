'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

import FormGenerate from "@/components/generate/FormGenerate"
import TitleGenerate from "@/components/generate/TitleGenerate"

import { userStore } from "@/server/store/user.store"
import { imageStore } from "@/server/store/image.store"

const Generate = () => {

    const user = userStore()
    const image = imageStore()

    const router = useRouter()

    const [imageUrl, setImageUrl] = useState<string | null>(null)

    const handleGenerateAnother = () => {

        const hasSeenWarming = localStorage.getItem("hasSeenGenerate");

        if (!hasSeenWarming) {
            router.push("/register")
            return
        }

        setImageUrl(null)
    }

    return (
        <div className="h-screen ml-64 justify-center items-center flex flex-col">
            {
                imageUrl ?
                    <div className="max-w-lg">
                        <Image src="/logo.png" alt="image-generated" width={600} height={600} />
                        <button
                            onClick={handleGenerateAnother}
                            className="mt-4 w-full bg-indigo-500 text-white px-4 py-2 text-lg rounded-md hover:bg-indigo-600 transition duration-200 font-semibold"
                        >
                            Generar otra imagen
                        </button>
                    </div> :
                    <>
                        <TitleGenerate />
                        <FormGenerate setImageUrl={setImageUrl} isLoggedIn={user.isLoggedIn} getImage={image.getImage} />
                    </>
            }
        </div>
    )
}

export default Generate