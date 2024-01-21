import { PostsRepository } from '@/repositories/posts-repository';
import { Post } from '@/types';

interface CreatePostUseCaseParams {
  user_id: string;
  content: string;
}

interface CreatePostUseCaseResponse {
  post: Post;
}

export class CreatePostUseCase {
  constructor(private PostsRepository: PostsRepository) {}

  async execute({
    content,
    user_id,
  }: CreatePostUseCaseParams): Promise<CreatePostUseCaseResponse> {
    const post = await this.PostsRepository.create({
      author_id: user_id,
      content,
      likes: 0,
    });

    return { post };
  }
}
