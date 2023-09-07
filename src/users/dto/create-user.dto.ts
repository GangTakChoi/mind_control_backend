import { ApiProperty } from '@nestjs/swagger';
import { MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: '계정 아이디', maxLength: 30, minLength: 3 })
  @MaxLength(30)
  @MinLength(3)
  accountId: string;

  @ApiProperty({ description: '계정 비밀번호', maxLength: 25, minLength: 6 })
  @MaxLength(25)
  @MinLength(6)
  password: string;

  @ApiProperty({ description: '사용자 이름', maxLength: 10, minLength: 1 })
  @MaxLength(10)
  @MinLength(1)
  name: string;
}
