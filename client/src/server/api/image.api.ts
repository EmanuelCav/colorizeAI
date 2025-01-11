import { IInput } from "@/interface/Image";

import { model_api, token_access } from "@/config/config";

export const generateImageApi = async (data: IInput) => {

    const response = await fetch(`${model_api}`,
        {
            headers: {
                Authorization: `Bearer ${token_access}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(data),
        }
    );

    const result = await response.blob();

    return result;
}