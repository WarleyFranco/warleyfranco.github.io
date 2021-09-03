import React from 'react';
import { Locales } from '~/locales';

interface ILocaleContext {
  readonly locale: string
  readonly defaultLocale?: string,
  toggleLocale?: () => void,
}

const LocaleContext = React.createContext<ILocaleContext>({
  locale: Locales.English,
  defaultLocale: Locales.English,
  toggleLocale(): void {},
});

export default LocaleContext;
