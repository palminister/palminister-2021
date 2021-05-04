import Head from 'next/head'
import Intro from './components/Intro'
import Stack from './components/Stack'
import Experience from './components/Experience'
import Project from './components/Project'
import Modal from './components/Modal'
import Footer from './components/Footer'
import React, { useState, useEffect } from 'react'

const Home = () => {
  const [offsetY, setOffestY] = useState(0)
  const [selectExperience, setSelectExperience] = useState(-1)
  const handleScroll = () => setOffestY(window.pageYOffset)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <>
      <Head>
        <title>Palminister Portfolio</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        ></link>
        <link rel="preconnect" href="https://fonts.gstatic.com/"></link>
        <meta
          name="description"
          content="Palminister Portfolio 2021, by Thanapat (Palm) Jumnongrat"
        ></meta>
      </Head>
      <Intro offsetY={offsetY}></Intro>
      <Stack></Stack>
      <Experience setSelectExperience={setSelectExperience}></Experience>
      <Modal
        selectExperience={selectExperience}
        setSelectExperience={setSelectExperience}
      ></Modal>
      <Project></Project>
      <Footer></Footer>
    </>
  )
}
export default Home
