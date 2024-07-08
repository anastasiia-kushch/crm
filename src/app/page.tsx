import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl">Home page</h1>
      <ReactQueryDevtools initialIsOpen={false} />
    </main>
  );
}
