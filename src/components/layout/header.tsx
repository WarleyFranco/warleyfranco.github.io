import React from 'react'
import Nav from '~/types/nav'
import Link from 'next/link'
import styles from './header.module.scss'
import { useRouter } from 'next/router'
import { locales } from '~/locales/locales'

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
  const { locale } = useRouter()
  const text = (key) => locales[locale][key]

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>Warley Franco</h1>
        <nav>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path} locale={locale}>
                  <a className={styles.link}>{text(item.name)}</a>
                </Link>
              </li>
            ))}
            <li>
              <Link href={''} locale={locale === 'en' ? 'pt' : 'en'}>
                <a className={styles.link}>Toggle Language</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
