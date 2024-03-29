import React from 'react'
import styles from '../styles/pinnedProjects.module.scss'
import { IoIosPlayCircle } from 'react-icons/io'
import { MdArticle } from 'react-icons/md'
import { FaBug } from 'react-icons/fa'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import Link from 'next/link';

type PinnedProjectsProps = {

}

const PinnedProjects: React.FC<PinnedProjectsProps> = () => {
  return (
    <>
    <svg width="0" height="0">
      <linearGradient id="gradient-svg" x1="100%" y1="100%" x2="0%" y2="100%">
        <stop stopColor="#ffff00" offset="0%" />
        <stop stopColor="#ff0000" offset="100%" />
      </linearGradient>
    </svg>

    <div className={styles.container}>


      <div className={styles.card}>
        <IoIosPlayCircle size={25} style={{ fill: "url(#gradient-svg)" }}/>
        <span>
          <h3>Multiplexer</h3>
          <h3>Video APP</h3>
        </span>
        <p>Multiplexer is video multiplayer tool that lets you build your own multiplayer layouts that you can easily share with others.</p>
        <div className={styles.projectLink}>
          <Link href='https://www.multiplexer.fi/' passHref>
            <BsFillArrowRightCircleFill size={30} style={{ fill: "url(#gradient-svg)" }} />
          </Link>
        </div>
      </div>

      <div className={styles.card}>
        <MdArticle size={25} style={{ fill: "url(#gradient-svg)" }}/>
        <span>
          <h3>Blog</h3>
          <h3>publishing</h3>
        </span>
        <p>Role based publishing platform project.</p>
        <div className={styles.projectLink}>
          <Link href='https://blog-43f84.web.app' passHref>
              <BsFillArrowRightCircleFill size={30} style={{ fill: "url(#gradient-svg)" }} />
          </Link>
        </div>
      </div>

      <div className={styles.card}>
        <FaBug size={25} style={{ fill: "url(#gradient-svg)" }}/>
        <span>
          <h3>WPCracker</h3>
          <h3>pentest tool</h3>
        </span>
        <p>Performs multiple brute force and username enumerations tasks in same time. This is a continuation of the 
          <Link href="https://github.com/JoniRinta-Kahila/WPCracker" passHref>
            <b><u>WPCracker</u></b>
          </Link>
          project.
        </p>
        <div className={styles.projectLink}>
          <Link href='https://github.com/JoniRinta-Kahila/wpcrackergui' passHref>
              <BsFillArrowRightCircleFill size={30} style={{ fill: "url(#gradient-svg)" }} />
          </Link>
        </div>
      </div>

    </div>
    </>
  )
}

export default PinnedProjects
