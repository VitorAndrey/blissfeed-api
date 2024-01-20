import { PostsRepository } from '../posts-repository';
import { prisma } from '@/lib/prisma';
import { CreatePost } from '@/types';

export class PrismaPostsRepository implements PostsRepository {
  async create(data: CreatePost) {
    const post = await prisma.post.create({
      data,
    });

    return post;
  }

  async findAll() {
    const posts = await prisma.post.findMany();

    return posts;
  }

  async findByUserId(author_id: string) {
    const userPosts = await prisma.post.findMany({
      where: {
        author_id,
      },
    });

    return userPosts;
  }
}
