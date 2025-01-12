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
    createdAt?: string;
    updatedAt?: string;
}