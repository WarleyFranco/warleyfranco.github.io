import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col flex-1 min-h-screen bg-white dark:bg-gray-800">
      <div className="justify-self-start">
        <Header />
      </div>
      <div className="flex flex-col flex-grow">{children}</div>
      <div className="justify-self-end">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
