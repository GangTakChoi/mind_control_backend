import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  BadRequestException,
} from '@nestjs/common';
import { DiariesService } from './diaries.service';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { ApiQuery } from '@nestjs/swagger';
import { MindState } from './constants';

@Controller('diaries')
export class DiariesController {
  constructor(private readonly diariesService: DiariesService) {}

  @ApiQuery({ name: 'mindState', enum: MindState })
  @Post()
  create(@Body() createDiaryDto: CreateDiaryDto, @Request() req) {
    const userId = req.user.id;
    return this.diariesService.create(createDiaryDto, userId);
  }

  @Get()
  findMyAll(@Request() req) {
    const userId = req.user.id;
    return this.diariesService.findMyAll(userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    const userId = req.user.id;

    const diary = await this.diariesService.findOne(id);

    if (!diary || diary.userId != userId) {
      throw new BadRequestException();
    }

    return this.diariesService.remove(id, userId);
  }
}
