import { UsersRepository } from '../users-repository';
import { prisma } from '@/lib/prisma';
import { CreateUser } from '@/types';

export class PrismaUsersRepository implements UsersRepository {
  async create(data: CreateUser) {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  }
}
