import React, { useEffect, useState } from 'react';
import { Locales } from '~/locales';
import { useRouter } from 'next/router';

interface LocaleContextProps {
  readonly locale: string,
  readonly defaultLocale?: string,
  readonly setLocale?: (locale: string) => void,
}

export const LocaleContext = React.createContext<LocaleContextProps>({
  locale: Locales.English,
  defaultLocale: Locales.English,
  setLocale: () => null
});

export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState<string>(Locales.English);
  const { locale: routerLocale } = useRouter();

  useEffect(() => {
    if (routerLocale) {
      setLocale(routerLocale);
    }
  }, [routerLocale, locale]);

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
};
