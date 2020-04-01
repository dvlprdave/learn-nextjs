import Layout from '../layout/layout';
import Link from 'next/link';

const PostLink = ({id}) => (
  <li>
    <Link href="/posts/[id]" as={`/posts/${id}`}>
      <a>{id}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink id="Hello Next.js" />
      <PostLink id="Learn Next.js" />
      <PostLink id="Deploy apps" />
    </ul>
  </Layout>
);

export default Blog