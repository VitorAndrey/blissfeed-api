import {
  Article as PrismaArticle,
  AudioContent as PrismaAudioContent,
  Comment as PrismaComment,
  Conversation as PrismaConversation,
  Message as PrismaMessage,
  Post as PrismaPost,
  Prisma,
  User as PrismaUser,
  VideoContent as PrismaVideoContent,
} from '@prisma/client';

export type User = PrismaUser;
export type CreateUser = Prisma.UserCreateInput;

export type Post = PrismaPost;
export type CreatePost = Prisma.PostUncheckedCreateInput;

export type Comment = PrismaComment;
export type CreateComment = Prisma.CommentCreateInput;

export type Conversation = PrismaConversation;
export type CreateConversation = Prisma.ConversationCreateInput;

export type Message = PrismaMessage;
export type CreateMessage = Prisma.MessageCreateInput;

export type Article = PrismaArticle;
export type CreateArticle = Prisma.ArticleCreateInput;

export type VideoContent = PrismaVideoContent;
export type CreateVideoContent = Prisma.VideoContentCreateInput;

export type AudioContent = PrismaAudioContent;
export type CreateAudioContent = Prisma.AudioContentCreateInput;
