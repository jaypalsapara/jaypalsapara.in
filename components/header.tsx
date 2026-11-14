import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 overflow-x-clip bg-background px-2">
            <div className="screen-line-bottom mx-auto flex h-16 w-full max-w-screen items-center border-x ps-12 pe-10 after:z-1 md:max-w-7xl">
                <div>Jaypal Sapara</div>
                <div className="ms-auto">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
