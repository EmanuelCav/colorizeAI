'use client'

import { useEffect } from "react"

import ImageExplore from "@/components/explore/ImageExplore"

import { imageStore } from "@/server/store/image.store"
import { historyImagesApi } from "@/server/api/image.api"
import { userStore } from "@/server/store/user.store"

const History = () => {

    const user = userStore()
    const image = imageStore()

    useEffect(() => {
        (async () => {
            if (user.user.token) {
                const data = await historyImagesApi(user.user.token)
                image.showImages(data)
            }
        })()
    }, [user.user.token])

    return (
        <div className="ml-0 lg:ml-64 flex flex-col justify-center items-center">
            <div className="mt-20">
                {
                    image.images.length > 0 && image.images.map((img) => {
                        return <ImageExplore img={img} key={img._id} />
                    })
                }
            </div>
        </div>
    )
}

export default History
