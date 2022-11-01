export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <head>
        <title>Next.js App Directory Playground</title>
      </head>
      <body className="overflow-y-scroll bg-zinc-900">{children}</body>
    </html>
  );
}
