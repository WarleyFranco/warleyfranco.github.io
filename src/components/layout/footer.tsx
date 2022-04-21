const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="h-16 drop-shadow-md border-t-2 flex justify-center">
        <small className="text-sm text-gray-700 dark:text-gray-300 self-center">Warley Franco - {year}</small>
      </footer>
    </>
  );
};

export default Footer;
