import Link from 'next/link'
import ButtonTheme from '../ButtonTheme'
import FormSearch from '../SearchBar'
import ButtonToggler from '../ButtonToggler'
import styles from './styles.module.css'

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} navbar-expand-lg navbar-light`}>
      <div className="container container-xxxl">
        <Link href="/">
          <span className={`${styles.navbar_brand} fs-3`}>
            <span className={`${styles.text_purple} fw-bold`}>What</span>
            Movie
          </span>
        </Link>
        <div className="d-block d-lg-none ms-auto">
          <ButtonTheme />
        </div>
        <ButtonToggler />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 pt-1">
            <li className={styles.nav_item}>
              <Link href="/" className={styles.nav_link}>
                Home
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link href="/about-us" className={styles.nav_link}>
                About Us
              </Link>
            </li>
          </ul>
          <FormSearch />
          <div className="d-none d-lg-block">
            <ButtonTheme />
          </div>
        </div>
      </div>
    </nav>
  )
}
