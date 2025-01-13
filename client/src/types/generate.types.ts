import { IImage } from "@/interface/Image";

export type FormGeneratePropsType = {
    isLoggedIn: boolean;
    setImageUrl: (imageUrl: string | null) => void;
    getImage: (image: IImage) => void;
    token: string;
    setIsLoading: (isLoading: boolean) => void;
}

export type ImageGeneratedPropsType = {
    imageUrl: string;
    isLoggedIn: boolean;
    handleGenerateAnother: () => void;
    imageId: string;
    token: string;
    getImage: (image: IImage) => void;
}

export type ActionsImagePropsType = {
    handleDownload: () => void;
    handleSave: () => void;
    isSaved: boolean;
    isLoggedIn: boolean;
}