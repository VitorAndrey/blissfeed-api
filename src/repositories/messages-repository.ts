import { CreateMessage, Message } from '@/types';

export interface MessagesRepository {
  create(message: CreateMessage): Promise<Message>;
  findByConversation(conversation_id: string): Promise<Message[]>;
}
