# Next.js Notes

## Creating a Next.js project

Move into any folder you'd like to store your Next.js project in and then add the following lines in your terminal:

```shell
  mkdir next-project
  cd next-project
  npm init -y
  npm install --save react react-dom next
```
- mkdir next-project (creates a new folder in your current directory called "next-project")
- cd next-project (moves into the project directory)
- npm init -y (creates package.json)
- npm i -y (installs react, react-dom, and next as dependencies)

### Adding scripts 

If you head into your `package.json` file, you'll see `scripts`. The only thing you should see is a test script. Let's add to it to help us run and build our project when the time comes.

In addition to the test script, add the following into your `scripts` : 

```
  "dev": "next",
  "build": "next build",
  "start": "next start",
```

### Pages

We need to create a pages directory in the root of our project so Next knows what's going to be displayed.
> Pages is a special directory seen by Next.

Go ahead and create the directory and an initial page by adding the following into your terminal: 

```shell
  mkdir pages
  cd pages
  touch index.js
```
> "touch" cretes a file in our current sitting directory. You can simply add the file manually in your current editor if you'd like, but I find using the terminal a bit faster.

### Building our first page

Within index.js add the following: 

```javascript
  const Index = () => (
    <div>
      <p>My first Next.js project</p>
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

We can use it by adding an additional page to our project by doing the following: 

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
      <p>My first Next.js project</p>
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

Components are a crucial part of creating reausable peaces throughout your project that stay constant. For example, a Header component or a Navigation component that is seen on every page. 

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
        <p>My first Next.js project</p>
      </div>
  );

  export default Index;
```

You should now see the `Header` component on both pages and be able to link back and forth between each link.
