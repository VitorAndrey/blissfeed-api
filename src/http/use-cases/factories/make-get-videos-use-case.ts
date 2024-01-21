import { GetVideosUseCase } from '../get-videos';
import { PrismaVideosRepository } from '@/repositories/prisma/prisma-videos-repository';

export function makeGetVideosUseCase() {
  const videosRepository = new PrismaVideosRepository();
  const videosUseCase = new GetVideosUseCase(videosRepository);

  return videosUseCase;
}
