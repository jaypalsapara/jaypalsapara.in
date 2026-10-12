import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
  return (
    <header className="px-2 overflow-x-clip">
      <div className="border-x mx-auto max-w-screen md:max-w-5xl h-14 flex items-center w-full screen-line-bottom ps-4 pe-2">
        <div>Jaypal Sapara</div>
        <div className="ms-auto">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
