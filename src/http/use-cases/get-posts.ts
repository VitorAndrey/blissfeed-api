import { FailedFetchingData } from './errors/failed-fetching-data.error';
import { PostsRepository } from '@/repositories/posts-repository';
import { Post } from '@/types';

interface GetPostsUseCaseRequest {
  user_id?: string;
}

interface GetPostsUseCaseReply {
  posts: Post[];
}

export class GetPostsUseCase {
  constructor(private PostsRepository: PostsRepository) {}

  async execute({
    user_id,
  }: GetPostsUseCaseRequest): Promise<GetPostsUseCaseReply> {
    let posts = null;

    if (user_id) {
      const userPosts = await this.PostsRepository.findByUserId(user_id);
      posts = userPosts;
    } else {
      const allPosts = await this.PostsRepository.findAll();
      posts = allPosts;
    }

    if (!posts) {
      throw new FailedFetchingData();
    }

    return {
      posts,
    };
  }
}
