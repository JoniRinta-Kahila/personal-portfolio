import type { NextPage } from 'next'
import MainLayout from '../components/layouts/main'
import styles from '../styles/cv.module.scss'
import { eduData } from '../data/edudata'
import EduCard from '../components/eduCard'
import { workData } from '../data/workData'
import WorkCard from '../components/workCard'
import { ReactElement, useRef, useState } from 'react'
import { IWork } from '../types/workData'
// import { skillsData } from '../data/skillsData'

const Cv = () => {
  
  const itemsToDisplay = 3
  const [workItems, setWorkItems] = useState<IWork[]>(workData.slice(0, itemsToDisplay))

  const showMoreRef = useRef<HTMLButtonElement>(null)

  const showMore = () => {
    setWorkItems(workData)

    if (showMoreRef.current) {
      showMoreRef.current.style.display = 'none'
    }
  }

  return (
    <div className={styles.container}>
      <h1>curriculum vitae</h1>
      <div className={styles.cvSection}>
        <h2>Education</h2>
        {
          eduData.map(x => <EduCard key={x.key} data={x} />)
        }
      </div>

      {/* <div className={styles.cvSection}>
        <h2>Skills</h2>
        {
          skillsData.map(x => <p key={x.key}>kek</p>)
        }
      </div> */}

      <div className={styles.cvSection}>
        <h2>Work</h2>
        {
          workItems.map(x => <WorkCard key={x.key} data={x} />)
        }
        <div className={styles.showMore}>
          <button ref={showMoreRef} onClick={showMore}>Show all works</button>
        </div>
      </div>
    </div>
  )
}

Cv.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Cv
