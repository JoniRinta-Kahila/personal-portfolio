import React from 'react'
import styles from '../styles/repoCard.module.scss'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { BsFileEarmarkCode } from 'react-icons/bs'
import { AiOutlineStar, AiOutlineFork } from 'react-icons/ai'
import Link from 'next/link'
import { IRepo } from '../types/githubData'



type RepoCardProps = {
  data: IRepo
}

const RepoCard: React.FC<RepoCardProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      <span className={styles.name}>
        <RiGitRepositoryLine />
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
          <BsFileEarmarkCode />
          {
            data.language ?? '- ? -'
          }
        </span>
        <span>
          <AiOutlineStar />
          {
            data.stargazers_count ?? 0
          }
        </span>
        <span>
          <AiOutlineFork />
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
  )
}

export default RepoCard
