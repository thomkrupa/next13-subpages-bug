import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>homepage</p>
      <Link href="/ssr">SSR demo</Link>
    </div>
  );
}
