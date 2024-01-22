import { AllData, CommentsRepository } from '../comments-repository';
import { prisma } from '@/lib/prisma';

export class PrismaCommentsRepository implements CommentsRepository {
  async create(allData: AllData) {
    const comment = await prisma.comment.create({
      data: {
        ...allData.data,
        [`${allData.content_type}_id`]: allData.content_id,
      },
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
