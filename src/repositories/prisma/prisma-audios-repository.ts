import { AudiosRepository } from '../audios-repository';
import { prisma } from '@/lib/prisma';

export class PrismaAudiosRepository implements AudiosRepository {
  async findAll() {
    const Audios = await prisma.audioContent.findMany();

    return Audios;
  }
}
