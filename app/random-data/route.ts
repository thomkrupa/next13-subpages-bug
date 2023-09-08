import type { NextApiRequest } from 'next';

function getIP(request: Request | NextApiRequest) {
  // const xff =
  //   request instanceof Request
  //     ? request.headers.get('x-forwarded-for')
  //     : request.headers['x-forwarded-for'];

  const xff =
    request instanceof Request
      ? request.headers.get('x-statsy-ip')
      : request.headers['x-statsy-ip'];

  const xRealIp =
    request instanceof Request
      ? request.headers.get('x-real-ip')
      : request.headers['x-real-ip'];

  console.log('x-forwarded-for', { xff });
  console.log('x-statsy-ip', { xStatsyIp });
  console.log('x-real-ip', { xRealIp });

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
