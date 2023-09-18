import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  ParseIntPipe,
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
  findAllOfMe(@Request() req) {
    const userId = req.user.id;
    return this.diariesService.findAllOfMe(userId);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @Request() req) {
    const userId = req.user.id;
    return this.diariesService.remove(+id, userId);
  }
}
