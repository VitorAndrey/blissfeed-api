import { FailedFetchingData } from '../use-cases/errors/failed-fetching-data.error';
import { makeCreatePoststeUseCase } from '../use-cases/factories/make-create-posts-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function createPosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(request.body);

  try {
    const createPostsUseCase = makeCreatePoststeUseCase();

    await createPostsUseCase.execute(post);
  } catch (error) {
    if (error instanceof FailedFetchingData) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(201).send();
}
