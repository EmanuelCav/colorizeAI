import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ImageDocument = Image & Document;

@Schema()
export class Image {
    @Prop({ required: true, type: String, trim: true })
    input: string;

    @Prop({ type: String, trim: true })
    title: string;

    @Prop({ type: String, trim: true })
    description: string;

    @Prop({ type: Types.ObjectId, ref: 'User' })
    user: Types.ObjectId;

    @Prop({ type: Boolean })
    isSaved: boolean;

    @Prop({ type: Boolean })
    isPublic: boolean;

    @Prop({ type: String, trim: true })
    image: string;

    @Prop({ type: String, trim: true })
    imageId: string;

    @Prop({ default: Date.now })
    createdAt: Date;

    @Prop({ default: Date.now })
    updatedAt: Date;
}

export const ImageSchema = SchemaFactory.createForClass(Image);

