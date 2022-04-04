import type { NextPage } from 'next';
import { ReactElement, useEffect, useState } from 'react';
import MainLayout from '../components/layouts/main'
import RepoCard from '../components/repoCard'
import styles from '../styles/projects.module.scss'
import { IRepo } from '../types/githubData';
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('https://personal-portfolio-pi-indol.vercel.app/api/github/')
  const data: IRepo[] = await res.json()

  return { props: { data } }
}

const Projects = ({ data }: any) => {
  const repoData: IRepo[] = data.repos

  return (
    <div className={styles.container}>
      {
        repoData === null || repoData === undefined
        ? <div>No Data!</div>
        :null
      }
      {
        repoData?.length && repoData.length > 0
        ? repoData.map(x => <RepoCard key={x.id} data={x} />)
        : null
      }
    </div>
  )
}

Projects.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Projects
