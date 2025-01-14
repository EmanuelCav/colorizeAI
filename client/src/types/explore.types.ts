import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

import { IImage } from "@/interface/Image"

export type ImageExplorePropsType = {
    img: IImage;
    router: AppRouterInstance;
}