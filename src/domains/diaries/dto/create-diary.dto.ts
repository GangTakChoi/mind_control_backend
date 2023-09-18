import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength, isBoolean } from 'class-validator';
import { MindState } from '../constants';

class DiaryGoal {
  @ApiProperty()
  content: string;
  @ApiProperty()
  isCompleted: boolean;
}

export class CreateDiaryDto {
  @ApiProperty({ description: '기록 내용', required: false })
  content: string;

  @ApiProperty({ enum: ['SO_GOOD', 'GOOD', 'NORMAL', 'BAD', 'SO_BAD'] })
  mindState: MindState;

  @ApiProperty({
    description: '목표 기록',
    required: false,
    type: () => [DiaryGoal],
  })
  goals: DiaryGoal[];
}
