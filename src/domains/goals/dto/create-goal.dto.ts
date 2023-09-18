import { ApiProperty } from '@nestjs/swagger';
import { Length } from 'class-validator';

export class CreateGoalDto {
  @ApiProperty({ description: '목표 내용', maxLength: 100, minLength: 1 })
  @Length(1, 100, { message: '100자 이하로 입력해주세요.' })
  content: string;
}
