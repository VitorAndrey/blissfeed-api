import { ConversationUseCase } from '../conversation';
import { PrismaConversationsRepository } from '@/repositories/prisma/prisma-conversations-repository';
import { PrismaMessagesRepository } from '@/repositories/prisma/prisma-messages-repository';

export function makeConversationUseCase() {
  const MessagesRepository = new PrismaMessagesRepository();
  const conversationsRepository = new PrismaConversationsRepository();

  const conversationUseCase = new ConversationUseCase(
    MessagesRepository,
    conversationsRepository,
  );

  return conversationUseCase;
}
