import { Type } from 'class-transformer';
import { IsIn, IsNumber, IsString, Max, Min } from 'class-validator';

const imageTypes = ['png', 'jpeg'];

export class CreateImageDTO {
  @IsNumber()
  @Type(() => Number)
  @Min(100)
  @Max(10000)
  height: number;
  @IsNumber()
  @Type(() => Number)
  @Min(100)
  @Max(10000)
  width: number;
  @IsIn(imageTypes)
  type: 'png' | 'jpeg';
  @IsString()
  code: string;
}
