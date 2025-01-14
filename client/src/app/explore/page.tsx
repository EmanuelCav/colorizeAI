'use client'

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import ImageExplore from "@/components/explore/ImageExplore"
import Loading from "@/components/general/Loading"

import { imageStore } from "@/server/store/image.store"
import { exploreImagesApi } from "@/server/api/image.api"

const Explore = () => {

    const image = imageStore()
    const router = useRouter()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        (async () => {

            setIsLoading(true)

            try {

                const data = await exploreImagesApi()
                image.showImages(data)

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }

        })()
    }, [])

    return (
        <div className="ml-0 lg:ml-64 flex justify-around items-center p-2">
            {
                isLoading && <Loading text="Loading..." />
            }
            <div className="mt-20 flex w-full justify-around items-center flex-wrap">
                {
                    image.images.length > 0 && image.images.map((img) => {
                        return <ImageExplore img={img} router={router} key={img._id} />
                    })
                }
            </div>
        </div>
    )
}

export default Explore
