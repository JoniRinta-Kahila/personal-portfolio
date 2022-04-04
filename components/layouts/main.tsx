import Link from 'next/link'
import type { LayoutProps } from '../../types/pageWithLayouts'
import Navbar from '../navbar'
import styles from '../../styles/mainLayout.module.scss'
import Footer from '../footer'

const MenuItems: React.FC = () => (
  <div className={styles.menuItems}>
    <Link href='/cv'>CV</Link>
    <Link href='/projects'>PROJECTS</Link>
    <Link href='/'>HOME</Link>
  </div>
)

const Main: LayoutProps = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar
        hideNavbarOnScroll
        menuRendererEnd={<MenuItems/>}
        hamburgerMenuRenderer={<MenuItems/>}
      />
      <div className={styles.content}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Main
