import { MessagesRepository } from '../messages-repository';
import { prisma } from '@/lib/prisma';
import { CreateMessage } from '@/types';

export class PrismaMessagesRepository implements MessagesRepository {
  async create(data: CreateMessage) {
    const message = await prisma.message.create({
      data,
    });

    return message;
  }

  async findByConversation(conversation_id: string) {
    const messages = await prisma.message.findMany({
      where: {
        conversation_id,
      },
    });

    return messages;
  }
}
