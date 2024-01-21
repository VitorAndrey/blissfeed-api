import { Article } from '@/types';

export interface ArticlesRepository {
  findAll(): Promise<Article[]>;
}
