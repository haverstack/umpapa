import router from './router';

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(router.handle(event.request));
});
