const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="h-16 bg-white drop-shadow-md border-t-2 border-primary-700">
        <small className="text-sm text-gray-600">Warley Franco - {year}</small>
      </footer>
    </>
  );
};

export default Footer;
