import type { NextPage } from 'next';
import { ReactElement } from 'react';
import MainLayout from '../components/layouts/main'

const Projects = () => {
  
  return (
    <div>
      Projects
    </div>
  )
}

Projects.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Projects
