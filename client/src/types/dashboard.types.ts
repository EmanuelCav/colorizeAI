import { IImage } from "@/interface/Image";

export type ImageDashboardPropsType = {
    img: IImage;
    quitImage: (image: IImage) => void;
    token: string;
}

export type ActionsDashboardPropsType = {
    handleDownload: () => void;
    handleSave: () => void;
}