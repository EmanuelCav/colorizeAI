export interface IStoreUser {
    isLoggedIn: boolean;
    user: IUserInfo;
    authUser: (userData: IUserInfo) => void;
}

export interface IUserInfo {
    token?: string;
    user?: IUser;
}

export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    createdAt: string;
    updatedAt: string;
}

export interface IRegister {
    username: string;
    email: string;
    password: string;
    confirm: string;
}

export interface ILogin {
    email: string;
    password: string;
}