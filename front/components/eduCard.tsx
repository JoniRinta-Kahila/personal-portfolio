import React from 'react'
import { IEdu } from '../types/eduData'
import styles from '../styles/educard.module.scss'

type EduCardProps = {
  data: IEdu;
}

const EduCard: React.FC<EduCardProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.row}>
          <div className={styles.school}>
            <div className={styles.qualification}>
              <h3>
                <strong>
                  {
                    data.qualification
                  }
                </strong>
              </h3>
            </div>
            <div className={styles.schoolName}>
              {
                data.school
              }
            </div>
          </div>
          <div className={styles.perioid}>
            <p>
              {
                data.eduStart
              }
              -
              {
                data.eduEnd
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

export default EduCard
