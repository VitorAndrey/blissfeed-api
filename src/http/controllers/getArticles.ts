import { FailedFetchingData } from '../use-cases/errors/failed-fetching-data.error';
import { makeGetArticlesUseCase } from '../use-cases/factories/make-get-articles-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function getArticles(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  let articlesList = [];

  try {
    const getArticlesUseCase = makeGetArticlesUseCase();

    const { articles } = await getArticlesUseCase.execute();
    articlesList = articles;
  } catch (error) {
    if (error instanceof FailedFetchingData) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(200).send(articlesList);
}
