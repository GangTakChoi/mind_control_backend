import { Injectable } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiariesService {
  constructor(private prisma: PrismaService) {}
  async create(createDiaryDto: CreateDiaryDto, userId: number) {
    const diaryInfo = await this.prisma.diary.create({
      data: {
        userId,
        content: createDiaryDto.content,
        mindState: createDiaryDto.mindState,
      },
    });

    if (!createDiaryDto.goals) return;

    const goalList = createDiaryDto.goals.map((goal) => ({
      ...goal,
      diaryId: diaryInfo.id,
    }));

    return this.prisma.diaryGoal.createMany({ data: goalList });
  }

  findAllOfMe(userId: number) {
    return this.prisma.diary.findMany({
      where: { userId },
      select: { id: true, content: true, goals: true },
    });
  }

  remove(id: number, userId: number) {
    return this.prisma.diary.delete({ where: { id, userId } });
  }
}
