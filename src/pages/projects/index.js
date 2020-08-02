import React, {useEffect} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/MenuContainer/MenuContainer'
import TopLayover from '../../components/TopLayover/TopLayover'
import ProjectHeader from '../../containers/Projects/ProjectHeader/ProjectHeader'
import OtherProjects from '../../containers/Projects/OtherProjects/OtherProjects'
import Footer from '../../components/Footer/Footer'
import {resize} from '../../utils/common/common'
import {scrollAnimation} from '../../utils/pageanimations/scrollanimation/scrollanimation'
import {PageDataContext} from '../../utils/context/pageContext'



function Projects () {

  useEffect(() => {
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
        <title>Aiman Adlawan | Projects</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <TopLayover/>
        <div className="main-container">
          <PageDataContext pagesets={'projects'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <ProjectHeader />     
              <OtherProjects />  
              <Footer/>
            </main>
          </PageDataContext>
        </div>
      </div>
    </div>
  )
}

export default Projects

const scroll = () => {
  scrollAnimation('projects')
}