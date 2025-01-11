import { NextResponse } from "next/server";

import { IInput } from "@/interface/Image";

import { generateImageApi } from "@/server/api/image.api";

export async function POST(input: IInput) {

    try {

        const data = await generateImageApi(input)

        return NextResponse.json({
            image: data
        })

    } catch (error) {
        console.log(error);
    }

}