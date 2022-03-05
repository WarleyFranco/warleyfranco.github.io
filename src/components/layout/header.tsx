import React from 'react';
import Nav from '~/types/nav';
import Link from 'next/link';
import { useTranslation } from '~/hooks';
import { Locales } from '~/locales';
import { useRouter } from 'next/router';
import { Anchor } from '~/components/layout/typography';

const navItems: Nav[] = [
  {
    name: 'about',
    path: '/about',
  },
];

function Header() {
  const { t, locale } = useTranslation();
  return (
    <>
      <header className="flex items-center bg-white shadow h-20 px-4 justify-between">
        <Link href="/">
          <Anchor>
            <h1 className="font-sans text-4xl font-bold text-gray-700">Warley Franco<span className="text-pink-600 text-4xl">;</span></h1>
          </Anchor>
        </Link>
        <nav>
          <ul className="flex list-none">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} locale={locale}>
                  <Anchor>{t(item.name)}</Anchor>
                </Link>
              </li>
            ))}
            <LocaleLinks />
          </ul>
        </nav>
      </header>
    </>
  );
}

const LocaleLinks = () => {
  const { pathname, query } = useRouter();
  return (
    <>
      {Object.keys(Locales).map((locale) => (
        <li key={locale}>
          <Link href={{ pathname, query }} locale={Locales[locale]}>
            <Anchor>{Locales[locale]}</Anchor>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Header;
