import { FailedFetchingData } from './errors/failed-fetching-data.error';
import { VideosRepository } from '@/repositories/videos-repository';
import { VideoContent } from '@/types';

interface GetVideosUseCaseReply {
  videos: VideoContent[];
}

export class GetVideosUseCase {
  constructor(private videosRepository: VideosRepository) {}

  async execute(): Promise<GetVideosUseCaseReply> {
    const videos = await this.videosRepository.findAll();

    if (!videos) {
      throw new FailedFetchingData();
    }

    return {
      videos,
    };
  }
}
