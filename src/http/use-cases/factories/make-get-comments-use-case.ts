import { GetCommentsUseCase } from '../get-comments';
import { PrismaCommentsRepository } from '@/repositories/prisma/prisma-comments-repository';

export function makeGetCommentsUseCase() {
  const CommentsRepository = new PrismaCommentsRepository();
  const CommentsteUseCase = new GetCommentsUseCase(CommentsRepository);

  return CommentsteUseCase;
}
