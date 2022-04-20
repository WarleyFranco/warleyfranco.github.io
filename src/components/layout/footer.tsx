const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="h-16 bg-white drop-shadow-md border-t-2 flex justify-center">
        <small className="text-sm text-gray-600 self-center">Warley Franco - {year}</small>
      </footer>
    </>
  );
};

export default Footer;
