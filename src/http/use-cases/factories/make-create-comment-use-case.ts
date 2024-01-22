import { CreateCommentUseCase } from '../create-comment';
import { PrismaCommentsRepository } from '@/repositories/prisma/prisma-comments-repository';

export function makeCreateCommentUseCase() {
  const CommentsRepository = new PrismaCommentsRepository();
  const CommentsteUseCase = new CreateCommentUseCase(CommentsRepository);

  return CommentsteUseCase;
}
