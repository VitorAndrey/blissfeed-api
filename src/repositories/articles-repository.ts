import { Article } from '@/types';

export interface ArticlesRepository {
  findAll(id: string): Promise<Article[]>;
}
