import { ReactElement } from 'react';
import GithubRepos from '../components/githubRepos/githubRepos';
import MainLayout from '../components/layouts/main'
import styles from '../styles/projects.module.scss'

const Projects = () => {
  return (
    <div className={styles.container}>
      <GithubRepos />
    </div>
  )
}

Projects.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Projects
