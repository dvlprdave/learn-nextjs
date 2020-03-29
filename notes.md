## Next.js Notes

### Creating a Next.js project

- mkdir next-project
- cd next-project
- npm init -y (Creates package.json)
- npm i --save react react-dom next (install react, react-dom and next as dependencies)

- mkdir pages (Create pages folder in the root of the project. This holds all pages for our project and lets us run our project from here on out
- cd pages

- touch index.js
> Within index.js add the following. 
> This creates a React component (make sure it's exported as default).
```javascript
  export default function Index() {
  return (
    <div>
      <p>Hello Next.js</p>
    </div>
  );
}
```

- npm run dex (run our server)
> You should view the contents of the **Index** component we created