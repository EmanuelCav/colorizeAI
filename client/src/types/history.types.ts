import { IImage } from "@/interface/Image";

export type ActionsHistoryPropsType = {
    handleDownload: () => void;
    handleSave: () => void;
    isSaved: boolean;
}

export type ImageHistoryPropsType = {
    img: IImage;
    getImage: (image: IImage) => void;
    updateImage: (image: IImage) => void;
    token: string;
}