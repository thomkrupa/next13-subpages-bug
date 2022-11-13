import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <p>ISR demo</p>
      <h3>nodejs runtime, ISR is working</h3>
      <ul>
        <li>
          <Link href="/isr/1/node">Node page 1</Link>
        </li>
        <li>
          <Link href="/isr/2/node">Node page 2</Link>
        </li>
        <li>
          <Link href="/isr/3/node">Node page 3</Link>
        </li>
      </ul>
      <h3>experimental-edge runtime, ISR not working</h3>
      <ul>
        <li>
          <Link href="/isr/1/edge">Node page 1</Link>
        </li>
        <li>
          <Link href="/isr/2/edge">Node page 2</Link>
        </li>
        <li>
          <Link href="/isr/3/edge">Node page 3</Link>
        </li>
      </ul>
    </div>
  );
}
