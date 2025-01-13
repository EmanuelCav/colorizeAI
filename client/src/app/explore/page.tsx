'use client'

import { useEffect } from "react"

import ImageExplore from "@/components/explore/ImageExplore"

import { imageStore } from "@/server/store/image.store"
import { exploreImagesApi } from "@/server/api/image.api"

const Explore = () => {

    const image = imageStore()

    useEffect(() => {
        (async () => {
            const data = await exploreImagesApi()
            image.showImages(data)
        })()
    }, [])

    return (
        <div className="ml-0 lg:ml-64 flex justify-around items-center p-2">
            <div className="mt-20 flex w-full justify-around items-center flex-wrap">
                {
                    image.images.length > 0 && image.images.map((img) => {
                        return <ImageExplore img={img} key={img._id} />
                    })
                }
            </div>
        </div>
    )
}

export default Explore
