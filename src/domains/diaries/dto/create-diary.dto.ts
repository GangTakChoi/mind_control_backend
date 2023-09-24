import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsObject,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
  isBoolean,
} from 'class-validator';
import { Type } from 'class-transformer';
import { MindState } from '../constants';

class DiaryGoal {
  @ApiProperty()
  @IsString()
  content: string;
  @ApiProperty()
  @IsBoolean()
  isCompleted: boolean;
}

export class CreateDiaryDto {
  @ApiProperty({ description: '기록 내용', required: false })
  @IsString()
  content: string;

  @ApiProperty({ enum: ['SO_GOOD', 'GOOD', 'NORMAL', 'BAD', 'SO_BAD'] })
  @IsEnum(MindState)
  mindState: MindState;

  @ApiProperty({
    description: '목표 기록',
    required: false,
    type: () => [DiaryGoal],
  })
  @IsArray()
  @Type(() => DiaryGoal)
  @ValidateNested({ each: true })
  goals: DiaryGoal[];
}
