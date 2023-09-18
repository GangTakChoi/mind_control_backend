import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GoalsService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGoalDto: CreateGoalDto, userId: number) {
    return this.prisma.goal.create({ data: { userId, ...createGoalDto } });
  }

  findAll(userId: number) {
    return this.prisma.goal.findMany({
      where: { userId },
      select: { id: true, content: true },
    });
  }

  findOne(where: { userId?: number; id?: number }) {
    return this.prisma.goal.findFirst({ where });
  }

  remove(id: number, userId: number) {
    return this.prisma.goal.delete({ where: { id, userId } });
  }
}
