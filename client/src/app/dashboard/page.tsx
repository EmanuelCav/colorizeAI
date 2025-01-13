'use client'

import { useEffect } from "react"

import ImageDashboard from "@/components/dashboard/ImageDashboard"

import { imageStore } from "@/server/store/image.store"
import { userStore } from "@/server/store/user.store"
import { dashboardImagesApi } from "@/server/api/image.api"

const Dashboard = () => {

    const user = userStore()
    const image = imageStore()

    useEffect(() => {
        (async () => {
            if (user.user.token) {
                const data = await dashboardImagesApi(user.user.token)
                image.showImages(data)
            }
        })()
    }, [])

    return (
        <div className="ml-0 lg:ml-64 flex justify-around items-center p-2">
            <div className="mt-20 flex w-full justify-around items-center flex-wrap">
                {
                    image.images.length > 0 && image.images.map((img) => {
                        return <ImageDashboard img={img} quitImage={image.quitImage} token={user.user.token!} key={img._id} />
                    })
                }
            </div>
        </div>
    )
}

export default Dashboard
