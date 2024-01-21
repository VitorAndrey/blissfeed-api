import { GetArticlesUseCase } from '../get-articles';
import { PrismaArticlesRepository } from '@/repositories/prisma/prisma-articles-repository';

export function makeGetArticlesUseCase() {
  const ArticlesRepository = new PrismaArticlesRepository();
  const articlesteUseCase = new GetArticlesUseCase(ArticlesRepository);

  return articlesteUseCase;
}
