import { ThemeToggle } from '@/components/theme-toggle';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 overflow-x-clip bg-background-dark px-2">
            <div className="screen-line-bottom mx-auto flex h-16 w-full max-w-screen items-center border-x ps-4 pe-2 after:z-1 md:max-w-7xl md:ps-12 md:pe-10">
                <div>Jaypal Sapara</div>
                <div className="ms-auto">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
