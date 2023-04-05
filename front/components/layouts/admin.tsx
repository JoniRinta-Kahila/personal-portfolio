import type { NextPage } from 'next'
import React from 'react'
import type { LayoutProps } from '../../types/pageWithLayouts'
import styles from '../../styles/mainLayout.module.scss'

const AdminLayout: LayoutProps = ({ children }) => {
  return (
    <React.Fragment>
      <div className={styles.content}>
        {children}
      </div>
    </React.Fragment>
  )
}
export default AdminLayout