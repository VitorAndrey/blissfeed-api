import { CreateUser, User } from '@/types';

export interface UsersRepository {
  create(data: CreateUser): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}
