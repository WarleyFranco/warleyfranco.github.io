import React from 'react';
import Nav from '../../types/nav';
import Link from 'next/link';
import styles from './header.module.scss';

const navItems: Nav[] = [
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Posts',
    path: '/posts'
  },
];

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.name}>Warley Franco</h1>
        <nav>
          <ul className={styles.list}>
            {navItems.map(item => (
              <>
                <li key={item.name}>
                  <Link href={item.path}><a className={styles.link}>{item.name}</a></Link>
                </li>
              </>
              )
            )}
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header