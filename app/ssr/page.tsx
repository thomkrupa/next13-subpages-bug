import Link from 'next/link';

export const runtime = 'experimental-edge';

export default function Page() {
  return (
    <div>
      <h2>Works</h2>
      <ul>
        <li>
          <Link href="/ssr/1">SSR Page 1</Link>
        </li>
        <li>
          <Link href="/ssr/2">SSR Page 2</Link>
        </li>
        <li>
          <Link href="/ssr/3">SSR Page 3</Link>
        </li>
      </ul>
      <h2>Subdirectory pages, does not work</h2>
      <ul>
        <li>
          <Link href="/ssr/1/foo">SSR sub Page 1</Link>
        </li>
        <li>
          <Link href="/ssr/2/foo">SSR sub Page 2</Link>
        </li>
        <li>
          <Link href="/ssr/3/foo">SSR sub Page 3</Link>
        </li>
      </ul>
    </div>
  );
}
