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
