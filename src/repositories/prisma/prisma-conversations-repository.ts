import { ConversationsRepository } from '../conversations-repository';
import { prisma } from '@/lib/prisma';

export class PrismaConversationsRepository implements ConversationsRepository {
  async creat(user_id: string) {
    const conversation = await prisma.conversation.create({
      data: {
        user_id,
      },
    });

    return conversation;
  }

  async findByUserId(user_id: string) {
    const conversation = await prisma.conversation.findUnique({
      where: {
        user_id,
      },
    });

    return conversation;
  }
}
