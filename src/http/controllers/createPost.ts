import { FailedFetchingData } from '../use-cases/errors/failed-fetching-data.error';
import { makeCreatePostUseCase } from '../use-cases/factories/make-create-post-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function createPost(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    user_id: z.string(),
    content: z.string(),
  });

  const { user_id, content } = registerBodySchema.parse(request.body);

  try {
    const createPostUseCase = makeCreatePostUseCase();

    await createPostUseCase.execute({ user_id, content });
  } catch (error) {
    if (error instanceof FailedFetchingData) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(201).send();
}
