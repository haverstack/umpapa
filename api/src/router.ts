import { Router } from 'itty-router';
import { createResponse, errorNotFound, handleOptions } from './helpers';
import { setAvatarFactoryRoutes } from './avatarFactory';

const router = Router();

router.get('/', () => {
  return createResponse({ message: 'Hello, world!' });
});
router.options('*', handleOptions);

setAvatarFactoryRoutes(router);

router.get('/*', errorNotFound);

export default router;
