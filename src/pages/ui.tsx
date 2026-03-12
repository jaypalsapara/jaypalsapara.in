import Button from '@/components/button';
import Container from '@/components/container';
import Div from '@/components/div';
import H1 from '@/components/h1';
import H2 from '@/components/h2';
import H3 from '@/components/h3';
import H4 from '@/components/h4';
import P from '@/components/p';
import Small from '@/components/small';
import { Globe } from 'lucide-react';

export default function Ui() {
  return (
    <main>
      <Div>
        <Container>
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <P>
            It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content here', making it look like readable English. Many
            desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
            search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
            over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </P>
          <Small>This is the body text</Small>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="lg">
              Click me
            </Button>
            <Button variant="outline">
              <Globe /> Click me
            </Button>
            <Button variant="outline" size="sm">
              Click me
            </Button>
            <Button variant="outline" size="xs">
              Click me
            </Button>
          </div>
        </Container>
      </Div>
    </main>
  );
}
