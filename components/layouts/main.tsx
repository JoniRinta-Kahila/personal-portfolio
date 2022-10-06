import type { LayoutProps } from '../../types/pageWithLayouts'
import { ModalContextProvider } from '@rintsin/common-components'
import styles from '../../styles/mainLayout.module.scss'
import Footer from '../footer'
import React from 'react'
import Navbar from '../navbar/navbar';

const Main: LayoutProps = ({ children }) => {
  return (
    <ModalContextProvider>
      <React.Fragment>
        <div className={styles.content}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </React.Fragment>
    </ModalContextProvider>
  )
}

export default Main
