import { Injectable } from '@nestjs/common';
import { CreateDiaryDto } from './dto/create-diary.dto';
import { UpdateDiaryDto } from './dto/update-diary.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DiariesService {
  constructor(private prisma: PrismaService) {}
  async create(createDiaryDto: CreateDiaryDto, userId: string) {
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

  findMyAll(userId: string) {
    return this.prisma.diary.findMany({
      where: { userId },
      select: {
        id: true,
        content: true,
        mindState: true,
        createdAt: true,
        goals: true,
      },
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });
  }

  findOne(id: string) {
    return this.prisma.diary.findUnique({ where: { id } });
  }

  remove(id: string, userId: string) {
    return this.prisma.diary.delete({ where: { id, userId } });
  }
}
