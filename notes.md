# Next.js Notes

## Creating a Next.js app

Move into any folder you'd like to store your Next.js app in and then add the following lines in your terminal:

```shell
  mkdir next-app
  cd next-app
  npm init -y
  npm install --save react react-dom next
```
- mkdir next-app (creates a new folder in your current directory called "next-app")
- cd next-app (moves into the newly created app directory)
- npm init -y (creates package.json)
- npm i -y (installs react, react-dom, and next as dependencies)

### Adding scripts 

If you head into your `package.json` file, you'll see `scripts`. The only thing you should see is a test script. Let's add the following within `Scripts` to help us run and build our app when the time comes:

```
  "dev": "next",
  "build": "next build",
  "start": "next start",
```

### Pages

We need to create a pages directory in the root of our app so Next knows what's going to be displayed.

> Pages is a special directory seen by Next.

Go ahead and create the directory and an initial page by adding the following into your terminal: 

```shell
  mkdir pages
  cd pages
  touch index.js
```
> "touch" creates a file in our current sitting directory. You can simply add the file manually in your current editor if you'd like, but I find using the terminal a bit faster.

### Building our first page

Within index.js add the following: 

```javascript
  const Index = () => (
    <div>
      <p>My first Next.js app</p>
    </div>
  );

export default Index;
```
This creates a basic React component (make sure it's exported as default).

Run our server to view our component by running the following command: 

```shell
  npm run dev
```
You should be promted that the server is ready on [http://localhost:3000]( http://localhost:3000). If you visit the link, you should see the Index page with "Hello Next.js" as its contents.

### Routes and Page Navigation

Let's add more pages and navigate between them. Next.js provides us with a simple and fast way to do this using the `Link` component from `next/Link`. 

We can use it by adding an additional page to our app by doing the following: 

> Make sure you're currently sitting in the pages directory.

```shell 
touch about.js
```
Within the `about.js` file, create a new component by adding the following: 

```javascript
const About = () => (
  <div>
    <p>This is the about page</p>
  </div>
);

export default About;
```
We can view the page by heading to [http://localhost:3000](http://localhost:3000/about).

### Linking Pages

We've set up two individual pages sp far, but in order to link them, we need to use the `Link` component mentioned earlier. 

If you head back into the index page `pages/index.js`, we can implement the `Link` by removing what he had in the file and adding the following: 

```javascript
  import Link from 'next/link';

  const Index = () => (
    <div>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>My first Next.js app</p>
    </div>
    );

  export default Index;
```

Only two things have changed. We imported the `Link` component from 'next/link`: 

```javascript
  import Link from 'next/link';
```

Then, we used the `Link` component that takes in an `href` prop which leads to our `about` page: 

```javascript
  <Link href="/about">
    <a>About Page</a>
  </Link>
```


If you visit the index page [http://localhost:3000](http://localhost:3000), you should now see an "About Page" link. If you click it, you should be taken to the "About" page.

> More on Links on [`next/link`](https://nextjs.org/docs/api-reference/next/link).


### Reusable/Shared Components

Components are a crucial part of creating reausable peaces throughout your app that stay constant. For example, a Header component or a Navigation component that is seen on every page. 

Let's start by creating a folder that stores our components and add a Header component to it. In your root directory, create a `components` folder: 

```shell
  mkdir components
```

Then, go ahead and create a `header.js` file within the `components` folder and add the folowing code to the file:

```javascript
  import Link from 'next/link';

  const linkStyle = {
    marginRight: 15
  };

  const Header = () => (
    <div>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </div>
  );

  export default Header;
```

Above, our `Header` component uses `Link` to display a `home` and `about` link allowing us to navigate between the two wherever we place the `Header` component. 

You'll also notice `linkStyles`. This is simply a defined styles object used to space out our links. 

To get the full idea on how this component can be reusable, add the component to both the `Index` and `About` page like so: 

```javascript
  import Header from '../components/header';

  const Index = () => (
      <div>
        <Header />
        <p>My first Next.js app</p>
      </div>
  );

  export default Index;
```

You should now see the `Header` component on both pages and be able to link back and forth between each link.

## Layouts

Taking the concept above of reusable components, we can apply a global layout to our app.

In the root of our app, create a `layout` folder followed by a `layout.js` file. This will hold our `Layout` component and any other associations to our layout we decide to add.

```shell
  mkdir layouts
  touch layouts.js
```
Drop the following lines of code into the `layout.js` file to create our component: 

```javascript
  import Header from '../components/header';

  const layoutStyle = {
    margin: '2rem',
    padding: '2rem',
    border: '1px solid #000'
  };

  const Layout = (props) => (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );

  export default Layout;
```

Our `layout.js` file is fairly basic. We've imported the `Header` component as it will be passed along with our `Layout` component. Then we have a styles object containing basic styles followed by our `Layout` component itself. 

The `Layout` will render any component and its contents that it wraps via `props.children`.

> Make sure to remove the `import` statement and the `Header` itself from both our `Index` and `About` components since it will now be passed via our `Layout` component.

## Dynamic Pages

In your app, you want to have different views for a user depending on their needs. With dynamic dynamic pages and content, we can achieve this. Let's build a simple blog app with dynamic pages. 

You can toss out what we have for now in our `Index` component and add the following:

> We'll be sitting in `pages/index.js`

```javascript
  import Layout from '../components/MyLayout';
  import Link from 'next/link';

  const PostLink = ({title}) => (
    <li>
      <Link href={`/post?title=${title}`}>
        <a>{title}</a>
      </Link>
    </li>
  );

   const Blog = () => (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          <PostLink title="Hello Next.js" />
          <PostLink title="Learn Next.js is awesome" />
          <PostLink title="Deploy apps with Zeit" />
        </ul>
      </Layout>
    );

  export default Blog
```

Our `Blog` component is a simple list of inidividual blog posts which are represented by `PostLink`. Each `PostLink` takes in a `title` prop which is used as the parameter to the query string wihtin the `Link` component.

```javascript
  <Link href={`/post?title=${title}`}>
```

This is how our dynamic data gets passed. What's happening is the post title path `${title}` will be equal to the contents of the `title` prop in our `PostLink`.

### Create Individual Post Page

Currently, if you click on any of our posts, you'll be greated by "404 This page could not be found." This is because there is no associated page for our posts. Let's fix that by creating a `Post` page - `post.js` in the `pages` directory and adding the following to the page: 

```javascript
  import { useRouter } from 'next/router';
  import Layout from '../layout/layout';

  const Post = () => {
    const router = useRouter();

    return (
      <Layout>
        <h1>{router.query.title}</h1>
        <p>This is the blog post content.</p>
      </Layout>
    );
  };

  export default Post;
```

Above, you'll notice something new `useRouter`.

`useRouter` is a React hook that exposes the `router` object and allows us to use its [features](https://nextjs.org/docs/api-reference/next/router#userouter). 

After importing `useRouter` we're saving its call into a variable called `router` and then using it to grab the `guery.title` we set in our `Link` back in `index.js`. 

`query` is simply an object returned by the exposed `router` object we imported. 




