import { FailedFetchingData } from '../use-cases/errors/failed-fetching-data.error';
import { makeGetAudiosUseCase } from '../use-cases/factories/make-get-audios-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function getAudios(request: FastifyRequest, reply: FastifyReply) {
  let getAudiosList = [];

  try {
    const getAudiosUseCase = makeGetAudiosUseCase();

    const { audios } = await getAudiosUseCase.execute();
    getAudiosList = audios;
  } catch (error) {
    if (error instanceof FailedFetchingData) {
      return reply.status(500).send({ message: error.message });
    }

    throw error;
  }

  return reply.status(200).send(getAudiosList);
}
