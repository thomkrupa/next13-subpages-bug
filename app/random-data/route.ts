import type { NextApiRequest } from 'next';

function getIP(request: Request | NextApiRequest) {
  const xff =
    request instanceof Request
      ? request.headers.get('x-forwarded-for')
      : request.headers['x-forwarded-for'];

  const xStatsyIp =
    request instanceof Request
      ? request.headers.get('x-statsy-ip')
      : request.headers['x-statsy-ip'];

  console.log('x-forwarded-for', { xff });
  console.log('x-statsy-ip', { xStatsyIp });

  return xff ? (Array.isArray(xff) ? xff[0] : xff.split(',')[0]) : '127.0.0.1';
}

export const runtime = 'experimental-edge';
export const dynamic = 'force-dynamic';

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
