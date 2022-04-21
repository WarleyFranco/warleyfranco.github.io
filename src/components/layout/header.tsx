import React from 'react';
import Nav from '~/types/nav';
import Link from 'next/link';
import { useTranslation } from '~/hooks';
import { Locales } from '~/locales';
import { useRouter } from 'next/router';
import { Anchor } from '~/components/layout/typography';
import toggleDarkMode from '~/utils/darkmode';
import { LightModeIcon } from '~/components/layout/light-mode-icon';

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
      <header className="flex items-center shadow h-20 px-4 justify-between">
        <Link href="/">
          <Anchor>
            <h1 className="font-sans text-4xl font-bold text-gray-700 dark:text-gray-200">
              W<span className="hidden sm:inline sm:mr-2">arley</span>F<span className="hidden sm:inline">ranco</span>
              <span className="text-accent text-4xl dark:text-dark-accent">;</span>
            </h1>
          </Anchor>
        </Link>
        <nav>
          <ul className="flex list-none">
            {navItems.map((item) => (
              <li key={item.name} className="px-2 mx-2 md:px-8 md:mx-4 border-r-2 border-accent border-opacity-50">
                <Link href={item.path} locale={locale}>
                  <Anchor>{t(item.name)}</Anchor>
                </Link>
              </li>
            ))}
            <LocaleLinks />
            <li className="pl-1 md:pl-4">
              <LightModeIcon height={30} width={30} onClick={toggleDarkMode} className="cursor-pointer text-gray-700 hover:text-yellow-400 dark:text-yellow-400 dark:hover:text-gray-300" />
            </li>
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
        <li key={locale} className="px-1 md:px-4">
          <Link href={{ pathname, query }} locale={Locales[locale]}>
            <Anchor>{Locales[locale]}</Anchor>
          </Link>
        </li>
      ))}
    </>
  );
};

export default Header;
