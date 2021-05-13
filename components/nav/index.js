import Link from 'next/link'
import { useState } from 'react'
import Container from '../container'
import styles from './nav.module.scss'
import Hamburger from '../utils/hamburger'
import SideMenu from './side-menu'
import Menus from './menus'

const Nav = ({ theme = 'light' }) => {
  const websiteName = 'Open Process Ventures'
  const [open, setOpen] = useState(false)

  const getThemeClass = () => {
    if (theme === 'dark') {
      return styles.dark
    }
    if (theme === 'extra-dark') {
      return styles.extraDark
    }

    return ''
  }

  return (
    <nav>
      <div className={`${styles.wrapper} ${getThemeClass()}`}>
        <Container>
          <nav className={`${styles.nav} ${getThemeClass()}`}>
            <Link href="/">
              <div className={`${styles.title} ${getThemeClass()}`}>
                <img src="/logo.svg" alt="logo" />
                <span>{websiteName}</span>
              </div>
            </Link>

            <div className={`${styles.menus} ${getThemeClass()}`}>
              <Menus styles={styles} />
            </div>

            <div
              role="button"
              tabIndex="0"
              className={styles.toggler}
              onClick={() => setOpen(true)}
              onKeyDown={() => setOpen(true)}
              onKeyPress={() => setOpen(true)}
            >
              <Hamburger color={theme} />
            </div>
          </nav>
          <div className={`${styles.separator} ${getThemeClass()}`} />
        </Container>
      </div>
      {open && <SideMenu open={open} openChange={() => setOpen(false)} />}
    </nav>
  )
}

export default Nav
