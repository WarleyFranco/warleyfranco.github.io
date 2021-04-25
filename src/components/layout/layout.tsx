import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col flex-grow">
      <div className="justify-self-start">
        <Header />
      </div>
      <div className="flex-1">{children}</div>
      <div className="justify-self-end">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
