async function fetchData(params: { id: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { next: { revalidate: 15 } },
  );
  const data = await res.json();
  return data;
}

export const revalidate = 60;

export const runtime = 'node';

export default async function Page({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-zinc-200">{data.title}</h1>
      <h2>sub page</h2>
      <p>Last Rendered: {new Date().toLocaleTimeString()}</p>
      <p className="font-medium text-zinc-500">{data.body}</p>
    </div>
  );
}
