import Container from '@/components/container';
import Logo from '@/components/logo';
import Nav from '@/components/nav';
import cn from '@/supports/style';

export default function Navbar({ className }: { className?: string }) {
  return (
    <Nav className={cn('flex h-16 items-center border-b', className)}>
      <Container>
        <Logo />
      </Container>
    </Nav>
  );
}
