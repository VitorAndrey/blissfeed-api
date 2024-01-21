import { FailedFetchingData } from '../use-cases/errors/failed-fetching-data.error';
import { makeGetPoststeUseCase } from '../use-cases/factories/make-get-posts-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function getPosts(request: FastifyRequest, reply: FastifyReply) {
  const pararamsType = z.object({
    user_id: z.string().optional(),
  });

  const { params } = request;
  const { user_id } = pararamsType.parse(params);

  let postsList = [];

  try {
    const getPostsUseCase = makeGetPoststeUseCase();

    const { posts } = await getPostsUseCase.execute(user_id ? { user_id } : {});
    postsList = posts;
  } catch (error) {
    if (error instanceof FailedFetchingData) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(200).send(postsList);
}
