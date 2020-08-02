import React, {useEffect} from 'react'
import Head from 'next/head'
import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import Header from '../components/Header/Header'
import SectionBlocks from '../components/SectionBlocks/SectionBlocks'
import Skills from '../containers/About/Skills/Skills'
import MyReads from '../containers/About/MyReads/MyReads'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {scrollAnimation} from '../utils/pageanimations/scrollanimation/scrollanimation'
import {PageDataContext} from '../utils/context/pageContext'



function About () {

  useEffect(() =>{
    // resize event to when the browser is resized
    resize()
    // scroll event
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  })
  
  
  
  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | About Me</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <TopLayover/>
        <div className="main-container">
          <PageDataContext pagesets={'about'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <Header/>
              <SectionBlocks title='skills' />
              <Skills />
              <MyReads />
              <Footer />
            </main>
          </PageDataContext>
        </div>
      </div>
    </div>
  )
}

export default About

const scroll = () => {
  scrollAnimation('about')
}