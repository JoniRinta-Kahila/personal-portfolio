import type { NextPage } from 'next';
import MainLayout from '../components/layouts/main'
import { LayoutProps } from '../types/pageWithLayouts'
import styles from '../styles/cv.module.scss'
import { eduData } from '../data/edudata';
import EduCard from '../components/eduCard';

const Cv: {
  layout: LayoutProps
} = (): JSX.Element => {
  
  return (
    <div className={styles.container}>
      <h1>My CV</h1>
      <div className={styles.educationSection}>
        <h2>Education</h2>
        {
          eduData.map(x => <EduCard key={x.key} data={x} />)
        }
      </div>
    </div>
  )
}

Cv.layout = MainLayout

export default Cv
