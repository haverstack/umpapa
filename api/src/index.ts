import { corsHeaders, handleOptions } from './cors';

const withStatus = (status: number = 200, headers?: {[key: string]: string}) => ({
  status,
  headers: { ...corsHeaders, ...(headers || {}) }
});

const handleRequest = async (request: Request): Promise<Response> => {
  return new Response(`request method: ${request.method}`, withStatus(200));
};

addEventListener('fetch', (event) => {
  if (event.request.method === 'OPTIONS') {
    // Handle CORS preflight requests
    event.respondWith(handleOptions(event.request));
  } else {
    event.respondWith(handleRequest(event.request));
  }
});
