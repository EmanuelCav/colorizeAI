import { api } from "./api";

import { IImage, IInput } from "@/interface/Image";

import { model_api, token_access } from "@/config/config";

export const generateImageApi = async (data: IInput): Promise<Blob> => {

    const response = await fetch(`${model_api}`,
        {
            headers: {
                'Authorization': `Bearer ${token_access}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data)
        }
    )

    if (!response.ok) {
        throw new Error("Error al generar una imagen")
    }

    const result = await response.blob();

    return result;
}

export const exploreImagesApi = async (): Promise<IImage[]> => {

    const response = await fetch(`${api}/images/explore`)

    if (!response.ok) {
        throw new Error("Error al generar una imagen")
    }

    const data = await response.json()

    return data

}

export const saveImageApi = async (imageData: FormData, token: string): Promise<IImage> => {

    const response = await fetch(`${api}/images`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: imageData
    })

    if(!response.ok) {
        throw new Error("Error to save an image")
    }

    const data = await response.json()

    return data

}

