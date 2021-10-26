import { Router, Request as IttyRequest, Request } from 'itty-router';
import { errorNotFound, createResponse } from './helpers';
import { store, StoreTypes } from './store';

const avatarFactoryStore = store(StoreTypes.AvatarFactory);

const getAvatarFactory = async (request: Request): Promise<Response> => {
  const req = request as IttyRequest;
  if (!req.params) {
    return errorNotFound();
  }
  const id = req.params.id;
  const avatarFactory = await avatarFactoryStore.get(id);
  if (avatarFactory == null) {
    return errorNotFound();
  }
  return createResponse(avatarFactory);
};
const getAllAvatarFactories = async (): Promise<Response> => {
  const avatarFactoryIds = await avatarFactoryStore.getKeys();
  return createResponse(avatarFactoryIds);
};
const postAvatarFactory = async (request: Request): Promise<Response> => {
  if (!request.json) {
    return createResponse({ error: 'Bad data' }, 422);
  }
  try {
    const data: JSONValue = await request.json();
    const id = await avatarFactoryStore.post(data);
    return createResponse({ id }, 201);
  } catch (e) {
    return createResponse({ error: (<Error>e).toString() }, 400);
  }
};

export const setAvatarFactoryRoutes = (router: Router<Request>): void => {
  router
    .get('/avatar-factory', getAllAvatarFactories)
    .post('/avatar-factory', postAvatarFactory)
    .get('/avatar-factory/:id', getAvatarFactory);
};
