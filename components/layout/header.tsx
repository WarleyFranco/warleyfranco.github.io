import React, { useContext } from 'react'
import Nav from '../../types/nav'
import Link from 'next/link'
import styles from './header.module.scss'
import LocaleContext from '../../locales/locale-context'
import { locales } from '../../locales/locales'

const navItems: Nav[] = [
  {
    name: 'about',
    path: '/about',
  },
  {
    name: 'Posts',
    path: '/posts',
  },
]

const Header = () => {
  const { language } = useContext(LocaleContext)
  const text = (key) => locales[language][key]

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>Warley Franco</h1>
        <nav>
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <a className={styles.link}>{text(item.name)}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
