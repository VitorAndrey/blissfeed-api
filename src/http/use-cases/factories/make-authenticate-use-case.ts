import { AuthenticateUseCase } from '../authenticate';
import { PrismaConversationsRepository } from '@/repositories/prisma/prisma-conversations-repository';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';

export function makeAuthenticateUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const conversationsRepository = new PrismaConversationsRepository();
  const authenticateUseCase = new AuthenticateUseCase(
    usersRepository,
    conversationsRepository,
  );

  return authenticateUseCase;
}
