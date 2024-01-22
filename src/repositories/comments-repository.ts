export type AllData = {
  data: CreateComment;
  content_type: 'post' | 'article' | 'video_content' | 'audio_content';
  content_id: string;
};
import { Comment, CreateComment } from '@/types';

export interface CommentsRepository {
  create(data: AllData): Promise<Comment>;
  findByContentId(id: string): Promise<Comment[]>;
}
