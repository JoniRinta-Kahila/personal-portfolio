import type { NextPage } from 'next';
import MainLayout from '../components/layouts/main'
import { LayoutProps } from '../types/pageWithLayouts'

const Projects: {
  layout: LayoutProps
} = (): JSX.Element => {
  
  return (
    <div>
      Projects
    </div>
  )
}

Projects.layout = MainLayout

export default Projects
