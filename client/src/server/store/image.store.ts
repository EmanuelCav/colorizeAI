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
            })),
            quitImage: (image: IImage) => set((partial) => ({
                images: partial.images.filter(i => i._id !== image._id)
            })),
            updateImage: (image: IImage) => set((partial) => ({
                images: partial.images.map(i => i._id === image._id ? image : i)
            }))
        }),
        {
            name: `${storage_image}`
        }
    )
)