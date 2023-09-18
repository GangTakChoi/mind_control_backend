import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: '계정 아이디', maxLength: 30, minLength: 4 })
  @Length(4, 30, { message: '아이디는 4자 이상 30자 이하로 입력해주세요.' })
  accountId: string;

  @ApiProperty({ description: '계정 비밀번호', maxLength: 25, minLength: 6 })
  @Length(6, 25, { message: '패스워드는 6자 이상 25자 이하로 입력해주세요.' })
  @IsString()
  password: string;

  @ApiProperty({ description: '사용자 이름', maxLength: 10, minLength: 1 })
  @Length(1, 10, { message: '이름은 1자 이상 10자 이하로 입력해주세요.' })
  @IsString()
  name: string;
}
