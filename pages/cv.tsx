import type { NextPage } from 'next';
import MainLayout from '../components/layouts/main'
import { LayoutProps } from '../types/pageWithLayouts'
import styles from '../styles/cv.module.scss'
import { eduData } from '../data/edudata';
import EduCard from '../components/eduCard';
import { workData } from '../data/workData';
import WorkCard from '../components/workCard';
import { ReactElement } from 'react';

const Cv = () => {
  
  return (
    <div className={styles.container}>
      <h1>curriculum vitae</h1>
      <div className={styles.cvSection}>
        <h2>Education</h2>
        {
          eduData.map(x => <EduCard key={x.key} data={x} />)
        }
      </div>
      <div className={styles.cvSection}>
        <h2>Work</h2>
        {
          workData.map(x => <WorkCard key={x.key} data={x} />)
        }
      </div>
    </div>
  )
}

Cv.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Cv
