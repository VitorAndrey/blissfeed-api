import { FailedFetchingData } from './errors/failed-fetching-data.error';
import { CommentsRepository } from '@/repositories/comments-repository';
import { Comment } from '@/types';

interface GetCommentsUseCaseRequest {
  content_id: string;
}

interface GetCommentsUseCaseReply {
  comments: Comment[];
}

export class GetCommentsUseCase {
  constructor(private CommentsRepository: CommentsRepository) {}

  async execute({
    content_id,
  }: GetCommentsUseCaseRequest): Promise<GetCommentsUseCaseReply> {
    const comments = await this.CommentsRepository.findByContentId(content_id);

    if (!comments) {
      throw new FailedFetchingData();
    }

    return {
      comments,
    };
  }
}
