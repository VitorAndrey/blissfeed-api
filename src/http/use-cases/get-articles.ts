import { FailedFetchingData } from './errors/failed-fetching-data.error';
import { ArticlesRepository } from '@/repositories/articles-repository';
import { Article } from '@/types';

interface GetArticlesUseCaseReply {
  articles: Article[];
}

export class GetArticlesUseCase {
  constructor(private articlesRepository: ArticlesRepository) {}

  async execute(): Promise<GetArticlesUseCaseReply> {
    const articles = await this.articlesRepository.findAll();

    if (!articles) {
      throw new FailedFetchingData();
    }

    return {
      articles,
    };
  }
}
