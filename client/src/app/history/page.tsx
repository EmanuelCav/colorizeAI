'use client'

import { useEffect, useState } from "react"

import ImageHistory from "@/components/history/ImageHistory"
import Loading from "@/components/general/Loading"

import { imageStore } from "@/server/store/image.store"
import { historyImagesApi } from "@/server/api/image.api"
import { userStore } from "@/server/store/user.store"

const History = () => {

    const user = userStore()
    const image = imageStore()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        (async () => {

            setIsLoading(true)

            try {

                if (user.user.token) {
                    const data = await historyImagesApi(user.user.token)
                    image.showImages(data)
                }

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }

        })()
    }, [])

    return (
        <div className="ml-0 lg:ml-64 flex flex-col justify-center items-center p-2">
            {
                isLoading && <Loading text="Loading..." />
            }
            <div className="mt-20 max-w-lg w-full">
                {
                    image.images.length > 0 && image.images.map((img) => {
                        return <ImageHistory img={img} getImage={image.getImage} updateImage={image.updateImage} token={user.user.token!} key={img._id} />
                    })
                }
            </div>
        </div>
    )
}

export default History
