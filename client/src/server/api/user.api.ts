import { api } from "./api"

import { ILogin, IRegister, IUserInfo } from "@/interface/User"

export const registerApi = async (userData: IRegister): Promise<IUserInfo> => {

    const response = await fetch(api + "/users/register", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const data = await response.json()

    if (!response.ok) {
        throw data.message[0]
    }

    return {
        user: data.user,
        token: data.token
    }

}

export const loginApi = async (userData: ILogin): Promise<IUserInfo> => {

    const response = await fetch(api + "/users/login", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })

    const data = await response.json()

    if (!response.ok) {
        throw data.message
    }

    return {
        user: data.user,
        token: data.token
    }

}