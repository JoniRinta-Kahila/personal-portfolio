import Link from 'next/link';
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'
import { RiMessage2Line } from 'react-icons/ri'
import styles from '../styles/footer.module.scss'
import Contactform from './contactform';
import { useModalContext } from './context/modalContextProvider'

type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {

  const { setModalContent, setModalOpenState } = useModalContext()

  const openContactformModal = () => {
    setModalContent(<Contactform />)
    setModalOpenState(true)
  }

  return (
    <div className={styles.container}>
      <Link href='https://github.com/JoniRinta-Kahila' passHref>
        <a target='_blank' rel='noreferrer'>
          <BsGithub size={30} color='#add8e6' />
        </a>
      </Link>

      <Link href='https://www.linkedin.com/in/joni-rinta-kahila-012690a0/' passHref>
        <a target='_blank' rel='noreferrer'>
          <BsLinkedin size={30} color='#f0ffff' />
        </a>
      </Link>

      <Link href='mailto:joni.rinta-kahila@hotmail.com' passHref>
        <a>
          <MdAlternateEmail size={30} color='#ffc0cb' />
        </a>
      </Link>

      <div onClick={openContactformModal} style={{cursor:'pointer'}}>
        <RiMessage2Line size={30} color='#ff4500' />
      </div>

    </div>
  )
}

export default Footer
