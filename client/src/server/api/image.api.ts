import { RedirectType } from "next/navigation";

import { api } from "./api";

import { IImage, IInput, IMessage, ISave } from "@/interface/Image";

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
        throw new Error("Error to generate an image")
    }

    const result = await response.blob();

    return result;
}

export const exploreImagesApi = async (): Promise<IImage[]> => {

    const response = await fetch(`${api}/images/explore`)

    if (!response.ok) {
        throw new Error("Error to get images")
    }

    const data = await response.json()

    return data

}

export const historyImagesApi = async (token: string): Promise<IImage[]> => {

    const response = await fetch(`${api}/images/history`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("Error to get images")
    }

    const data = await response.json()

    return data

}

export const dashboardImagesApi = async (token: string): Promise<IImage[]> => {

    const response = await fetch(`${api}/images/dashboard`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

    if (!response.ok) {
        throw new Error("Error to get images")
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

    if (!response.ok) {
        throw new Error("Error to save an image")
    }

    const data = await response.json()

    return data

}

export const saveImageGeneratedApi = async (imageData: ISave, id: string, token: string): Promise<IMessage> => {

    const response = await fetch(`${api}/images/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(imageData)
    })

    if (!response.ok) {
        throw new Error("Error to save an image")
    }

    const data = await response.json()

    return data

}

export const getImageApi = async (id: string, redirect: (url: string, type?: RedirectType) => never): Promise<IImage> => {

    const response = await fetch(`${api}/images/${id}`)

    if (!response.ok) {
        redirect("/explore")
    }

    const data = await response.json()

    return data

}
