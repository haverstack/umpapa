const BASE_URL =
  process.env.NODE_ENV == 'production'
    ? 'https://umpapa-api.haverstack.workers.dev'
    : 'http://localhost:8787';

export const getUrl = (path: string): string => {
  return new URL(path, BASE_URL).href;
};

const get = async (path: string): Promise<JSONValue> => {
  const response = await fetch(getUrl(path));
  return response.json();
};
const post = async (path: string, data: JSONValue): Promise<JSONValue> => {
  const response = await fetch(getUrl(path), {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};

const api = {
  get,
  post,
};

export default api;
