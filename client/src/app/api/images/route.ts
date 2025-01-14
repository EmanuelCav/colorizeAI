import { NextResponse } from "next/server";

import { IInput } from "@/interface/Image";

import { generateImageApi } from "@/server/api/image.api";

export async function POST(request: Request) {

    try {

        const body = await request.json()
        const data = await generateImageApi(body as IInput)

        return NextResponse.json({
            image: data
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
    }

}