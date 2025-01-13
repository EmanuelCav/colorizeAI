import { IImage } from "@/interface/Image";

export type FormGeneratePropsType = {
    isLoggedIn: boolean;
    setImageUrl: (imageUrl: string | null) => void;
    getImage: (image: IImage) => void;
    token: string;
}

export type ImageGeneratedPropsType = {
    imageUrl: string;
    handleGenerateAnother: () => void;
}