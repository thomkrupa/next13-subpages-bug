async function fetchData(params: { id: string }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id[0]}`,
  );
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params?: any;
  children?: React.ReactNode;
}) {
  const data = await fetchData(params);

  if (params.id[1] === 'foo') {
    return (
      <div className="space-y-4">
        <h2>foo!</h2>
        <h1 className="text-2xl font-medium text-zinc-200">{data.title}</h1>
        <p className="font-medium text-zinc-500">{data.body}</p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-zinc-200">{data.title}</h1>
      <p className="font-medium text-zinc-500">{data.body}</p>
    </div>
  );
}
