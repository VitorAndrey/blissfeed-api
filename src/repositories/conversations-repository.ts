import { Conversation } from '@/types';

export interface ConversationsRepository {
  creat(user_id: string): Promise<Conversation>;
  findByUserId(user_id: string): Promise<Conversation | null>;
}
