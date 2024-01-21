import { FailedFetchingData } from '../use-cases/errors/failed-fetching-data.error';
import { makeGetVideosUseCase } from '../use-cases/factories/make-get-videos-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function getVideos(request: FastifyRequest, reply: FastifyReply) {
  let getVideosList = [];

  try {
    const getVideosUseCase = makeGetVideosUseCase();

    const { videos } = await getVideosUseCase.execute();
    getVideosList = videos;
  } catch (error) {
    if (error instanceof FailedFetchingData) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(200).send(getVideosList);
}
