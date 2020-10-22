import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      { children }
      <h2>Footer</h2>
    </>
  )
}

export default Layout;