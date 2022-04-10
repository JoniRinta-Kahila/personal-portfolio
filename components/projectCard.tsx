import Link from 'next/link'
import React from 'react'
import styles from '../styles/projectCard.module.scss'

type ProjectCardProps = {
  backgroundText: string;
  headingText: string;
  description: string;
  href: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ backgroundText, headingText, description, href }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.content}>
          <h2>{ backgroundText }</h2>
          <h3>{ headingText }</h3>
          <p>{ description }</p>
          <Link href={href}>
            <a>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
