import { FailedFetchingData } from './errors/failed-fetching-data.error';
import { AudiosRepository } from '@/repositories/audios-repository';
import { AudioContent } from '@/types';

interface GetAudiosUseCaseReply {
  audios: AudioContent[];
}

export class GetAudiosUseCase {
  constructor(private audiosRepository: AudiosRepository) {}

  async execute(): Promise<GetAudiosUseCaseReply> {
    const audios = await this.audiosRepository.findAll();

    if (!audios) {
      throw new FailedFetchingData();
    }

    return {
      audios,
    };
  }
}
