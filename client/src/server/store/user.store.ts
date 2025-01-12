import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IStoreUser, IUserInfo } from "@/interface/User";

import { storage_user } from "@/config/config";

export const userStore = create(
    persist<IStoreUser>(
        (set) => ({
            isLoggedIn: false,
            user: {},
            authUser: (userData: IUserInfo) => set(() => ({
                isLoggedIn: true,
                user: userData
            })),
            logoutUser: () => set(() => ({
                isLoggedIn: false,
                user: {}
            }))
        }),
        {
            name: `${storage_user}`
        }
    )
)