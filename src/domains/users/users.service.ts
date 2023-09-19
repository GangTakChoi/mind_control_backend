import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    const users = await this.prisma.user.findMany({
      select: { accountId: true, diaries: true, goals: true, name: true },
    });
    return users;
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  findOneByAccountId(accountId: string) {
    return this.prisma.user.findUnique({ where: { accountId } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({ where: { id }, data: updateUserDto });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}