import { InvalidCredentialsError } from './errors/invalid-credentials-error';
import { ConversationsRepository } from '@/repositories/conversations-repository';
import { UsersRepository } from '@/repositories/users-repository';
import { Conversation, User } from '@/types';
import { compare } from 'bcryptjs';

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: User;
  conversation: Conversation;
}

export class AuthenticateUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private conversationsRepository: ConversationsRepository,
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialsError();
    }
    const doesPasswordMatches = await compare(password, user.password_hash);

    const conversation = await this.conversationsRepository.findByUserId(
      user.id,
    );

    if (!conversation) {
      throw new InvalidCredentialsError();
    }

    if (!doesPasswordMatches) {
      throw new InvalidCredentialsError();
    }

    return {
      user,
      conversation,
    };
  }
}
