const isLocalhost = !process.env.VERCEL_URL;

const url = isLocalhost
  ? 'http://localhost:3002'
  : `https://${process.env.VERCEL_URL}`;

async function getIp() {
  const res = await fetch(`${url}/random-data`);
  const data = await res.json();

  return data.ip;
}

export const runtime = 'experimental-edge';
export const dynamic = 'force-dynamic';

export default async function Page() {
  const ip = await getIp();

  return <p>your ip is: {ip}</p>;
}
