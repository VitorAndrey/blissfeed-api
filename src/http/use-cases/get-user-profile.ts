import { ResourceNotFoundError } from './errors/resource-not-found';
import { UsersRepository } from '@/repositories/users-repository';
import { User } from '@/types';

interface GetUserProfileUseCaseRequest {
  userId: string;
}

interface GetUserProfileUseCaseReply {
  user: User;
}

export class GetUserProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    userId,
  }: GetUserProfileUseCaseRequest): Promise<GetUserProfileUseCaseReply> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new ResourceNotFoundError();
    }

    return {
      user,
    };
  }
}
