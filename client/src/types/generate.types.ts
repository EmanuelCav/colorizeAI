import { IImage } from "@/interface/Image";

export type FormGeneratePropsType = {
    isLoggedIn: boolean;
    setImageUrl: (imageUrl: string | null) => void;
    getImage: (image: IImage) => void;
}