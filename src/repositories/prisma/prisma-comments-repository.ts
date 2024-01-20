import { CommentsRepository } from '../comments-repository';
import { prisma } from '@/lib/prisma';
import { CreateComment } from '@/types';

export class PrismaCommentsRepository implements CommentsRepository {
  async create(data: CreateComment) {
    const comment = await prisma.comment.create({
      data,
    });

    return comment;
  }

  async findByContentId(contentId: string) {
    const comments = await prisma.comment.findMany({
      where: {
        OR: [
          { post_id: contentId },
          { article_id: contentId },
          { video_content_id: contentId },
          { audio_content_id: contentId },
        ],
      },
    });

    return comments;
  }
}
