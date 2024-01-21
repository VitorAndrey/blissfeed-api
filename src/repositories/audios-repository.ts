import { AudioContent } from '@/types';

export interface AudiosRepository {
  findAll(): Promise<AudioContent[]>;
}
