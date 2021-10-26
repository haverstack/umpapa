const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Max-Age': '1728000',
};

export const withStatus = (
  status = 200,
  headers?: { [key: string]: string },
): ResponseInitializerDict => ({
  status,
  headers: { ...corsHeaders, ...(headers || { 'Content-Type': 'application/json' }) },
});

export const createResponse = (responseData: JSONValue, status = 200): Response => {
  return new Response(JSON.stringify(responseData), withStatus(status));
};

export const errorNotFound = (): Response => {
  return createResponse({ error: 'Not Found' }, 404);
};

export const handleOptions = (request: Request): Response => {
  if (
    request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    request.headers.get('Access-Control-Request-Headers') !== null
  ) {
    return new Response(null, {
      headers: corsHeaders,
    });
  } else {
    return new Response(null, {
      headers: {
        Allow: 'GET, HEAD, POST, OPTIONS, DELETE',
      },
    });
  }
};
