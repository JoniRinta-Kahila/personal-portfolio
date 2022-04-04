import React from 'react'
import { IWork } from '../types/workData'
import styles from '../styles/workCard.module.scss'

type WorkCardProps = {
  data: IWork;
}

const WorkCard: React.FC<WorkCardProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.row}>
          <div className={styles.work}>
            <div className={styles.title}>
              <h3>
                <strong>
                  {
                    data.title
                  }
                </strong>
              </h3>
            </div>
            <div className={styles.employer}>
              {
                data.emplyer
              }
            </div>
          </div>
          <div className={styles.perioid}>
            <p>
              {
                data.workStart
              }
              -
              {
                data.workEnd
              }
            </p>
          </div>
        </div>
        <p className={styles.description}>
          {
            data.description
          }
        </p>
      </div>
    </div>
  )
}

export default WorkCard
