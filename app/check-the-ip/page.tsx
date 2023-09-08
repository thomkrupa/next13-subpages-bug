import { headers } from 'next/headers';
const isLocalhost = !process.env.VERCEL_URL;

const url = isLocalhost
  ? 'http://localhost:3002'
  : `https://${process.env.VERCEL_URL}`;

async function getIp() {
  const headersList = headers();
  const ip = headersList.get('x-forwarded-for');

  const res = await fetch(`${url}/random-data`, {
    headers: {
      'x-statsy-ip': ip || '',
    },
  });

  const data = await res.json();

  return data.ip;
}

export const runtime = 'experimental-edge';
export const dynamic = 'force-dynamic';

export default async function Page() {
  const ip = await getIp();
  const headersList = headers();

  return (
    <p>
      your ip is: {ip}
      <br />
      header forwarded for: {headersList.get('x-forwarded-for')}
    </p>
  );
}
