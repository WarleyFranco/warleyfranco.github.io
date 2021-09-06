import React from 'react'
import Nav from '~/types/nav'
import Link from 'next/link'
import styles from './header.module.scss'
import { useTranslation } from '~/hooks';
import { Locales } from '~/locales';

const navItems: Nav[] = [
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'posts',
    path: '/posts',
  },
]

const Header = () => {
  const { t, locale } = useTranslation();
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>Warley Franco</h1>
        <nav>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} locale={locale}>
                  <a className={styles.link}>{t(item.name)}</a>
                </Link>
              </li>
            ))}
            <LocaleLinks />
          </ul>
        </nav>
      </header>
    </>
  )
}

const LocaleLinks = () => {
  return (
    <>
      {Object.keys(Locales).map((locale) => (
        <li key={locale}>
          <Link href={''} locale={Locales[locale]}>
            <a className={styles.link}>{Locales[locale]}</a>
          </Link>
        </li>
      ))}
    </>
  )
}

export default Header
