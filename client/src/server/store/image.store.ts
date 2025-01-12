import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IImage, IStoreImage } from "@/interface/Image";

import { storage_image } from "@/config/config";

export const imageStore = create(
    persist<IStoreImage>(
        (set) => ({
            image: {},
            images: [],
            showImages: (images: IImage[]) => set(() => ({
                images
            })),
            getImage: (image: IImage) => set(() => ({
                image
            }))
        }),
        {
            name: `${storage_image}`
        }
    )
)