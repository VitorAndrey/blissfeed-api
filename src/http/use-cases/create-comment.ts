import { CommentsRepository } from '@/repositories/comments-repository';
import { Comment } from '@/types';

interface CreateCommentUseCaseParams {
  content_id: string;
  content: string;
  author_id: string;
  content_type: 'post' | 'article' | 'video_content' | 'audio_content';
}

interface CreateCommentUseCaseResponse {
  comment: Comment;
}

export class CreateCommentUseCase {
  constructor(private CommentsRepository: CommentsRepository) {}

  async execute({
    content,
    content_id,
    author_id,
    content_type,
  }: CreateCommentUseCaseParams): Promise<CreateCommentUseCaseResponse> {
    const comment = await this.CommentsRepository.create({
      data: {
        author_id,
        content: content,
        likes: 0,
      },
      content_id,
      content_type,
    });

    return { comment };
  }
}
