import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col">
      <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
    </main>
  );
}
