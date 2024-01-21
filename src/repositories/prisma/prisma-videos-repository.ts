import { VideosRepository } from '../videos-repository';
import { prisma } from '@/lib/prisma';

export class PrismaVideosRepository implements VideosRepository {
  async findAll() {
    const videos = await prisma.videoContent.findMany();

    return videos;
  }
}
