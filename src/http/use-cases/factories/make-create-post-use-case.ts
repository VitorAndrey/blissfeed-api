import { CreatePostUseCase } from '../create-post';
import { PrismaPostsRepository } from '@/repositories/prisma/prisma-posts-repository';

export function makeCreatePostUseCase() {
  const PostsRepository = new PrismaPostsRepository();
  const PoststeUseCase = new CreatePostUseCase(PostsRepository);

  return PoststeUseCase;
}
