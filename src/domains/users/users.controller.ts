import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Public } from 'src/auth/auth.public';
import { errorMessage } from 'src/utils/exceptions.message';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Public()
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Public()
  @Get()
  findAll() {
    console.log('GET /users');
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Public()
  @Get(':accountId/verification')
  async checkAccountId(@Param('accountId') accountId: string) {
    if (accountId.length < 4 || accountId.length > 30)
      throw new BadRequestException(errorMessage['0001']);
    const userInfo = await this.usersService.findOneByAccountId(accountId);
    return {
      isConflict: userInfo ? true : false,
    };
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete('me')
  dropMe(@Request() req) {
    const userId = req.user.id;
    return this.usersService.remove(userId);
  }
}
