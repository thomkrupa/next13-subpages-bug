import type { NextApiRequest } from 'next';

function getIP(request: Request | NextApiRequest) {
  const xff =
    request instanceof Request
      ? request.headers.get('x-forwarded-for')
      : request.headers['x-forwarded-for'];

  return xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1';
}

export async function GET(request: Request) {
  const ip = getIP(request);

  const data = {
    ip,
  };

  return new Response(JSON.stringify(data), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
  });
}
