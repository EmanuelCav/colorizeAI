import { PartialType } from '@nestjs/mapped-types';
import { CreateImageHistoryDto } from './create-image.dto';

export class UpdateImageDto extends PartialType(CreateImageHistoryDto) {}
