import Link from 'next/link'
import type { LayoutProps } from '../../types/pageWithLayouts'
import Navbar from '../navbar/navbar'
import styles from '../../styles/mainLayout.module.scss'
import Footer from '../footer'
import ModalContextProvider from '../context/modalContextProvider'

const MenuItems: React.FC = () => (
  <div className={styles.menuItems}>
    <Link href='/'>HOME</Link>
    <Link href='/cv'>CV</Link>
    <Link href='/projects'>PROJECTS</Link>
  </div>
)

const Main: LayoutProps = ({ children }) => {
  return (
    <ModalContextProvider>
      <Navbar
        hideNavbarOnScroll
      />
      <div className={styles.content}>
        {children}
        <Footer />
      </div>
    </ModalContextProvider>
  )
}

export default Main
