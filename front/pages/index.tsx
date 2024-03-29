import type { NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import MainLayout from '../components/layouts/main'
import { tsParticles } from 'tsparticles';
import { ReactElement, useEffect, useState } from 'react';
import { useRouter } from "next/router";
import { useIsAuthenticated } from "@azure/msal-react";

const Home = () => {
  const router = useRouter();
  const isAuthenticated = useIsAuthenticated();

  // Check if the user is accessing the page via the "my.rint.si" subdomain
  const isMyRintSiSubdomain = router.pathname.startsWith("/my");
  // console.log(router.)

  useEffect(() => {
    console.log('useEffect => load particles')
    tsParticles.load('tsparticles', {
      style: { height: '60%' },
      fps_limit: 60,
      interactivity: {
        detect_on: 'canvas',
        events: {
          onclick: { enable: true, mode: 'push' },
          onhover: {
            enable: true,
            mode: 'attract',
            parallax: { enable: false, force: 60, smooth: 10 }
          },
          resize: true
        },
        modes: {
          push: { quantity: 4 },
          attract: { distance: 200, duration: 0.4, factor: 5 }
        }
      },
      particles: {
        color: { value: '#081e2e' },
        line_linked: {
          color: '#081e2e',
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1
        },
        move: {
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
          bounce: false,
          direction: 'none',
          enable: true,
          out_mode: 'out',
          random: false,
          speed: 2,
          straight: false
        },
        number: { density: { enable: true, value_area: 800 }, value: 80 },
        opacity: {
          anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
          random: false,
          value: 0.5
        },
        shape: {
          character: {
            fill: false,
            font: 'Verdana',
            style: '',
            value: '*',
            weight: '400'
          },
          polygon: { nb_sides: 5 },
          stroke: { color: '#000000', width: 0 },
          type: 'circle'
        },
        size: {
          anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
          random: true,
          value: 5
        }
      },
      polygon: {
        draw: { enable: false, lineColor: '#081e2e', lineWidth: 0.5 },
        move: { radius: 10 },
        scale: 1,
        type: 'none',
        url: ''
      },
      retina_detect: true
    })
  })

  // If the user is accessing the page via the "my.rint.si" subdomain and is not authenticated,
  // redirect them to the login page
  if (isMyRintSiSubdomain && !isAuthenticated) {
    router.push("/my/login");
    return null;
  }


  return (
    <div className={styles.container} id='tsparticles'>
      <div className={styles.header}>
        <h1>HELLO!</h1>
        <h2>Welcome to my portfolio page. My name is <b>Joni Rinta-Kahila.</b></h2>
        <h3>I am software developer and currently working at <a href='https://dataops.fi/'>DataOps Oy</a>.</h3>
        <h4>Here you will find my CV and some of my projects.</h4>
      </div>
    </div>
  )
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Home
