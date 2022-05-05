import Link from 'next/link'
import { nav as navStyle, a as aStyle } from './Nav.css'

const Nav = () => (
  <nav className={navStyle}>
    <Link href="/">
      <a className={aStyle}>Tableau de bord</a>
    </Link>
    <Link href="/products">
      <a className={aStyle}>Produits</a>
    </Link>
    <Link href="/pages">
      <a className={aStyle}>Pages</a>
    </Link>
  </nav>
)

export default Nav
