'use client'

import { useEffect, useState } from "react"
import { MdOutlineFileDownload } from "react-icons/md";
import Image from "next/image";
import { redirect, useParams } from 'next/navigation';

import Loading from "@/components/general/Loading";

import { getImageApi } from "@/server/api/image.api"
import { imageStore } from "@/server/store/image.store";

const GetImage = () => {

    const image = imageStore()
    const params = useParams<{ id: string; }>()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleDownload = async () => {
        if (image.image.image) {
            const response = await fetch(image.image.image)
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
    }

    useEffect(() => {
        (async () => {

            setIsLoading(true)

            try {

                if (params.id) {
                    const data = await getImageApi(params.id, redirect)
                    image.getImage(data)
                }

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }

        })()
    }, [params.id])

    return (
        <div className="h-screen ml-0 lg:ml-64 justify-center items-center flex flex-col p-2 md:p-0">
            {
                isLoading && <Loading text="Cargando..." />
            }
            {
                image.image.image && <div className="relative mt-2 flex flex-col bg-white shadow-md rounded-lg overflow-hidden border border-gray-200">
                    <div className="h-96 w-96 relative">
                        <Image
                            src={image.image.image}
                            alt="image-got"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                        />
                    </div>
                    <p className="text-indigo-500 font-semibold text-lg text-center my-4">Done by: {image.image.user?.username}</p>
                    <div className="flex flex-col items-center justify-center my-2">
                        <MdOutlineFileDownload size={36} onClick={handleDownload}
                            className="text-indigo-500 hover:bg-gray-200 active:bg-gray-100 cursor-pointer" />
                        <p className="text-indigo-500 text-md">Download Image</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default GetImage