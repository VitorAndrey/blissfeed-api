import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { ConversationsRepository } from '@/repositories/conversations-repository';
import { UsersRepository } from '@/repositories/users-repository';
import { User } from '@/types';
import { hash } from 'bcryptjs';

interface RegisterUseCaseParams {
  name: string;
  email: string;
  password: string;
}

interface RegisterUseCaseResponse {
  user: User;
}

export class RegisterUseCase {
  constructor(
    private usersRepository: UsersRepository,
    private conversationsRepository: ConversationsRepository,
  ) {}

  async execute({
    name,
    email,
    password,
  }: RegisterUseCaseParams): Promise<RegisterUseCaseResponse> {
    const password_hash = await hash(password, 6);

    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    });

    await this.conversationsRepository.creat(user.id);

    return { user };
  }
}
