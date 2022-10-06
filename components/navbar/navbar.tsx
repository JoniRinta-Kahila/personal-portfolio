import React from 'react'
import NavbarData from './navbarData'
import styles from '../../styles/navbar.module.scss'
import Link from 'next/link'
import { Navbar as MyNavbar } from '@rintsin/common-components'

type NavbarProps = {

}

const NavbarLinks = (
  <div className={styles.myMenuItems}>
    {NavbarData && NavbarData.map(x => <Link key={x.key} href={x.src}>{x.name}</Link>)}
  </div>
)

const HamburgerMenuLinks = (
  <div className={styles.myHamburgerMenuItems}>
    {NavbarData && NavbarData.map(x => <Link key={x.key} href={x.src}>{x.name}</Link>)}
  </div>
)

const Logo: React.ReactNode = (
  <div className={styles.myLogoRenderer}>
    <Link href='/' passHref>
      <h1>Rints.in</h1>
    </Link>
  </div>
)

const Navbar: React.FC<NavbarProps> = () => {
  return <MyNavbar 
    navbarPosition='fixed'
    menuRendererEnd={NavbarLinks}
    hamburgerMenuRenderer={HamburgerMenuLinks}
    logoRenderer={Logo}
    hideNavbarOnScroll
  />
}

export default Navbar
