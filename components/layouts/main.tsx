import type { LayoutProps } from '../../types/pageWithLayouts'
import Navbar from '../navbar/navbar'
import styles from '../../styles/mainLayout.module.scss'
import Footer from '../footer'
import ModalContextProvider from '../context/modalContextProvider'

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
