import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import {PageDataContext} from '../../utils/context/pageContext'
import {resize} from '../../utils/common/common'
import TopLayover from '../../components/TopLayover/TopLayover'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/MenuContainer/MenuContainer'
import Header from '../../containers/IndividualProject/Header'
import ProjectBody from '../../containers/IndividualProject/ProjectBody'
import Footer from '../../components/Footer/Footer'
import {scrollAnimation, debounce} from '../../utils/pageanimations/scrollanimation/scrollanimation'
import {StateContext} from '../../utils/context/stateContext'
import {variants} from '../../utils/pageanimations/motion/mainvariant'
import {motion} from 'framer-motion'

function Projects () {
  const {state} = useContext(StateContext)

  useEffect(() => {
    // resize event to when the browser is resized
    resize()

    setTimeout(() => {
      scrollAnimation()
    }, 300)
    window.addEventListener('scroll', debounce(scrollAnimation, 40))
  })

   return (
    <motion.div 
      variants={variants}
      initial='initial'
      animate='enter'
      exit={state.exitMode}
      className="container">
      <Head>
        <title>Aiman Adlawan | Music-Player5</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <TopLayover/>
        <div className="main-container">
          <PageDataContext projectsets={'music-player5'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <Header/>
              <ProjectBody />
              <Footer />
            </main>
          </PageDataContext>
        </div>
      </div>
    </motion.div>
  )
}


export default Projects
