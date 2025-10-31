import Button from '@/components/button';
import { Link } from 'react-router';

export default function PageNotFound() {
  return (
    <div className="pad-x flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-18 text-center">
      <h1 className="text-accent">404</h1>
      <h5>Oops! Page not found</h5>
      <small className="mt-2 max-w-[40ch] text-muted-foreground">
        The page you’re looking for doesn’t exist or has moved. Check the URL or return to the homepage.
      </small>
      <Link to={'/'} className="mt-6">
        <Button>Back to home</Button>
      </Link>
    </div>
  );
}
