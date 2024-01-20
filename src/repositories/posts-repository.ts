import { CreatePost, Post } from '@/types';

export interface PostsRepository {
  create(data: CreatePost): Promise<Post>;
  findByUserId(email: string): Promise<Post[]>;
  findAll(): Promise<Post[]>;
}
