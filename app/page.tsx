import { ThemeToggle } from '@/components/theme-toggle';

export default function Home() {
  return (
    <div>
      <main className="flex justify-center">
        <ThemeToggle />
        <p className="font-mono">Hello</p>
      </main>
    </div>
  );
}
