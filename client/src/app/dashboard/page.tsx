'use client'

import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import Link from "next/link"

import ImageDashboard from "@/components/dashboard/ImageDashboard"
import Loading from "@/components/general/Loading"

import { imageStore } from "@/server/store/image.store"
import { userStore } from "@/server/store/user.store"
import { dashboardImagesApi } from "@/server/api/image.api"

const Dashboard = () => {

    const router = useRouter()
    const user = userStore()
    const image = imageStore()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        if (!user.isLoggedIn) {
            router.push("/register")
        }
    }, [])

    useEffect(() => {
        (async () => {

            setIsLoading(true)

            try {

                if (user.user.token) {
                    const data = await dashboardImagesApi(user.user.token)
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
        <div className={`ml-0 lg:ml-64 flex justify-around items-center ${image.images.length === 0 ? "p-0" : "p-2"}`}>
            {
                isLoading && <Loading text="Loading..." />
            }
            {
                image.images.length === 0 ? (
                    <div className="max-w-lg h-screen flex flex-col w-full justify-center items-center">
                        <p className="text-indigo-500 font-bold text-center text-xl">Generate an image to save</p>
                        <Link
                            href="/generate"
                            className="mt-4 w-full items-center justify-center flex 
                            bg-indigo-500 text-white px-4 py-2 text-lg rounded-md hover:bg-indigo-600 transition duration-200 font-semibold"
                        >
                            Start Now!
                        </Link>
                    </div>
                ) : (
                    <div className="mt-20 flex w-full justify-around items-center flex-wrap">
                        {
                            image.images.map((img) => {
                                return <ImageDashboard img={img} quitImage={image.quitImage} token={user.user.token!} key={img._id} />
                            })
                        }
                    </div>
                )
            }
        </div>
    )
}

export default Dashboard
