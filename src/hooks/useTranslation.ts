import { useContext } from 'react';
import { LocaleContext } from '~/context';
import { Translations } from '~/locales';

export default function useTranslation() {
  const { locale, defaultLocale } = useContext(LocaleContext);

  const t = (key: string): string => {
    if (!Translations[locale][key]) {
      console.warn(`
        Translation not found! \
        Key: ${key} \
        Locale: ${locale}
      `);
    }

    return Translations[locale][key] ?? Translations[defaultLocale][key] ?? `MISSING_KEY: ${key}`;
  };

  return {
    t,
    locale,
  };
}
