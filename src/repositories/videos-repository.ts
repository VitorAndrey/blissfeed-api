import { VideoContent } from '@/types';

export interface VideosRepository {
  findAll(): Promise<VideoContent[]>;
}
