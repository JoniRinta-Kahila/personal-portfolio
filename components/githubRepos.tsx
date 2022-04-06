import React, { useEffect, useState } from 'react'
import { IRepo } from '../types/githubData'
import styles from '../styles/githubRepos.module.scss'
import RepoCard from './repoCard'

type GithubReposProps = {

}

const GithubRepos: React.FC<GithubReposProps> = () => {

  const [repoData, setRepoData] = useState<IRepo[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch('api/github')
      .then(res => res.json())
      .then(data => {
        setRepoData(data.repos)
        setLoading(false)
      })
      .catch(err => console.error(err.message))
  }, [])

  if (loading) return <div className={styles.loading}>Loading...</div>
  return (
    <div className={styles.container}>
      {
        repoData && repoData.map(x => <RepoCard key={x.id} data={x} />)
      }
    </div>
  )
}

export default GithubRepos
