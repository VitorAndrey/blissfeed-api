import { authenticate } from './controllers/authenticate';
import { conversation } from './controllers/conversation';
import { createComment } from './controllers/createComment';
import { createPost } from './controllers/createPost';
import { getArticles } from './controllers/getArticles';
import { getAudios } from './controllers/getAudio';
import { getComments } from './controllers/getComments';
import { getPosts } from './controllers/getPosts';
import { getVideos } from './controllers/getVideos';
import { register } from './controllers/register';
import { FastifyInstance } from 'fastify';

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', register);
  app.post('/sessions', authenticate);

  app.get('/articles', getArticles);

  app.get('/videos', getVideos);
  app.get('/audios', getAudios);

  app.get('/posts', getPosts);
  app.get('/posts/:user_id', getPosts);
  app.post('/posts', createPost);

  app.post('/conversation', conversation);

  app.get('/comments/:content_id', getComments);
  app.post('/comments', createComment);

  app.get('/status', () => 'API IS RUNNING');
}
