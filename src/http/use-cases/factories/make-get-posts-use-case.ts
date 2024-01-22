import { GetPostsUseCase } from '../get-posts';
import { PrismaPostsRepository } from '@/repositories/prisma/prisma-posts-repository';

export function makeGetPostsUseCase() {
  const PostsRepository = new PrismaPostsRepository();
  const PoststeUseCase = new GetPostsUseCase(PostsRepository);

  return PoststeUseCase;
}
