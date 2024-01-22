import { FailedFetchingData } from '../use-cases/errors/failed-fetching-data.error';
import { makeGetCommentsUseCase } from '../use-cases/factories/make-get-comments-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function getComments(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const pararamsType = z.object({
    content_id: z.string(),
  });

  const { params } = request;
  const { content_id } = pararamsType.parse(params);

  let commentsList = [];

  try {
    const getCommentsUseCase = makeGetCommentsUseCase();

    const { comments } = await getCommentsUseCase.execute({ content_id });
    commentsList = comments;
  } catch (error) {
    if (error instanceof FailedFetchingData) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(200).send(commentsList);
}
