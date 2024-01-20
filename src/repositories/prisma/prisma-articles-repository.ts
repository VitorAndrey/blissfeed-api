import { ArticlesRepository } from '../articles-repository';
import { prisma } from '@/lib/prisma';

export class PrismaArticlesRepository implements ArticlesRepository {
  async findAll() {
    const articles = await prisma.article.findMany();

    return articles;
  }
}
