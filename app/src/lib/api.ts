const BASE_URL =
  process.env.NODE_ENV == 'production'
    ? 'https://umpapa-api.haverstack.workers.dev'
    : 'http://localhost:8787';

export const getUrl = (path: string): string => {
  return new URL(path, BASE_URL).href;
};

const get = async (path: string): Promise<Response> => {
  const url = getUrl(path);
  return fetch(url);
};

const api = {
  get,
};

export default api;
