import { IUser } from "./User";

export interface IInput {
    inputs: string;
}

export interface IStoreImage {
    images: IImage[];
    image: IImage;
    showImages: (images: IImage[]) => void;
    getImage: (image: IImage) => void;
}

export interface IImage {
    _id?: string;
    input?: string;
    title?: string;
    description?: string;
    user?: IUser;
    isSaved?: boolean;
    isPublic?: boolean;
    image?: string;
    imageId?: string;
    createdAt?: string;
    updatedAt?: string;
}