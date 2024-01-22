import { ConversationError } from '../use-cases/errors/conversationError';
import { makeConversationUseCase } from '../use-cases/factories/make-conversation-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function conversation(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerBodySchema = z.object({
    user_id: z.string(),
    message: z.string(),
  });

  const { user_id, message } = registerBodySchema.parse(request.body);
  let response = null;

  try {
    const conversationUseCase = makeConversationUseCase();

    response = await conversationUseCase.execute({ user_id, message });
  } catch (error) {
    if (error instanceof ConversationError) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(200).send(response);
}
