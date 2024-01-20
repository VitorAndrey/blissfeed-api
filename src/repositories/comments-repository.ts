import { Comment, CreateComment } from '@/types';

export interface CommentsRepository {
  create(data: CreateComment): Promise<Comment>;
  findByContentId(id: string): Promise<Comment[]>;
}
