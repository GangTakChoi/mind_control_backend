import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Request,
  ParseIntPipe,
  BadRequestException,
} from '@nestjs/common';
import { GoalsService } from './goals.service';
import { CreateGoalDto } from './dto/create-goal.dto';
import { errorMessage } from 'src/utils/exceptions.message';

@Controller('goals')
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Post()
  create(@Body() createGoalDto: CreateGoalDto, @Request() req) {
    return this.goalsService.create(createGoalDto, req.user.id);
  }

  @Get()
  findAll(@Request() req) {
    const userId = req.user.id;
    return this.goalsService.findAll(userId);
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Request() req) {
    const userId = req.user.id;
    const goal = await this.goalsService.findOne({ userId, id });

    if (!goal) throw new BadRequestException(errorMessage['0000']);

    return this.goalsService.remove(id, userId);
  }
}
