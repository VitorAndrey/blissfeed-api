import { RegisterUseCase } from '../register';
import { PrismaConversationsRepository } from '@/repositories/prisma/prisma-conversations-repository';
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository';

export function makeRegisterUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const conversationsRepository = new PrismaConversationsRepository(); // Certifique-se de ajustar o import conforme necessário

  const registerUseCase = new RegisterUseCase(
    usersRepository,
    conversationsRepository,
  );

  return registerUseCase;
}
