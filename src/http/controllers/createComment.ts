import { FailedCreatingData } from '../use-cases/errors/failed-creating-data.error';
import { makeCreateCommentUseCase } from '../use-cases/factories/make-create-comment-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function createComment(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    user_id: z.string(),
    content_id: z.string(),
    content: z.string(),
    content_type: z.enum(['post', 'article', 'video_content', 'audio_content']),
  });

  const { user_id, content_id, content, content_type } =
    registerBodySchema.parse(request.body);

  try {
    const createCommentUseCase = makeCreateCommentUseCase();

    await createCommentUseCase.execute({
      author_id: user_id,
      content,
      content_id,
      content_type,
    });
  } catch (error) {
    if (error instanceof FailedCreatingData) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(201).send();
}
