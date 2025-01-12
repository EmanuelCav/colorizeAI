'use client'

import { useEffect } from "react"

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
        <div>Explore</div>
    )
}

export default Explore