// Link is a module within next that handles routing
import Link from 'next/link';

export default function Index() {
  return (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>My first Next.js projec</p>
    </div>
  );
}
