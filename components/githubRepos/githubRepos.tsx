import React, { useEffect, useState } from 'react'
import { IRepo } from '../../types/githubData'
import styles from '../../styles/githubRepos.module.scss'
import ReposPaginator from './reposPaginator'

const GithubRepos: React.FC = () => {

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
      <h2>My public GitHub repos</h2>
      <div className={styles.repos}>
        <ReposPaginator items={repoData} itemsPerPage={6} />
      </div>
    </div>
  )
}

export default GithubRepos
