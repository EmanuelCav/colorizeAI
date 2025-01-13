import { IUser } from "./User";

export interface IInput {
    inputs: string;
}

export interface IStoreImage {
    images: IImage[];
    image: IImage;
    showImages: (images: IImage[]) => void;
    getImage: (image: IImage) => void;
    quitImage: (image: IImage) => void;
    updateImage: (image: IImage) => void;
}

export interface IImage {
    _id?: string;
    input?: string;
    user?: IUser;
    isSaved?: boolean;
    isPublic?: boolean;
    image?: string;
    imageId?: string;
    createdAt?: string;
    updatedAt?: string;
}

export interface IMessage {
    message: string;
    image: IImage
}

export interface ISave {
    save: boolean;
}