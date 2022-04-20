import React from 'react'
import styles from '../../styles/repoCard.module.scss'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { BsFileEarmarkCode } from 'react-icons/bs'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'
import Link from 'next/link'
import { IRepo } from '../../types/githubData'



type RepoCardProps = {
  data: IRepo
}

const RepoCard: React.FC<RepoCardProps> = ({ data }) => {
  return (
    <>
    <svg width="0" height="0">
      <linearGradient id="gradient-svg" x1="100%" y1="100%" x2="0%" y2="100%">
        <stop stopColor="#ffff00" offset="0%" />
        <stop stopColor="#ff0000" offset="100%" />
      </linearGradient>
    </svg>
    <div className={styles.container}>
      <span className={styles.name}>
        <RiGitRepositoryLine style={{ fill: "url(#gradient-svg)" }} />
        <h3>
          {
            data.name ?? '- ? -'
          }
        </h3>
      </span>
      <p className={styles.description}>
        {
          data.description ?? ''
        }
      </p>
      <div className={styles.stats}>
        <span>
          <BsFileEarmarkCode style={{ fill: "url(#gradient-svg)" }} />
          {
            data.language ?? '- ? -'
          }
        </span>
        <span>
          <AiOutlineStar style={{ fill: "url(#gradient-svg)" }} />
          {
            data.stargazers_count ?? 0
          }
        </span>
        <span>
          <AiOutlineFork style={{ fill: "url(#gradient-svg)" }} />
          {
            data.forks ?? 0
          }
        </span>
      </div>
      <div className={styles.button}>
        <Link href={data.html_url ?? '.'}>
          <a rel='noreferrer' target='_blank'>
            Open in github
          </a>
        </Link>
      </div>
    </div>
    </>
  )
}

export default RepoCard
