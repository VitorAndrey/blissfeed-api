import { GetAudiosUseCase } from '../get-audios';
import { PrismaAudiosRepository } from '@/repositories/prisma/prisma-audios-repository';

export function makeGetAudiosUseCase() {
  const AudiosRepository = new PrismaAudiosRepository();
  const AudiosUseCase = new GetAudiosUseCase(AudiosRepository);

  return AudiosUseCase;
}
