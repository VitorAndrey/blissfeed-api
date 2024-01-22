import { sendGptAMessage } from '@/ai';
import { ConversationsRepository } from '@/repositories/conversations-repository';
import { MessagesRepository } from '@/repositories/messages-repository';
import { Message } from '@/types';

interface ConversationUseCaseParams {
  user_id: string;
  message: string;
}

interface ConversationUseCaseResponse {
  message: Message;
}

export class ConversationUseCase {
  constructor(
    private messagesRepository: MessagesRepository,
    private conversationsRepository: ConversationsRepository,
  ) {}

  async execute({
    message,
  }: ConversationUseCaseParams): Promise<ConversationUseCaseResponse> {
    const response = await sendGptAMessage(message);

    return response;
  }
}
