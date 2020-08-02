import React, {useEffect} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import TopLayover from '../components/TopLayover/TopLayover'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import Header from '../components/Header/Header'
import SectionBlocks from '../components/SectionBlocks/SectionBlocks'
import ShortProjectView from '../components/ShortProjectView/ShortProjectView'
import Needhelp from '../components/NeedHelp/NeedHelp'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {scrollAnimation} from '../utils/pageanimations/scrollanimation/scrollanimation'
import {PageDataContext} from '../utils/context/pageContext'


function Home () {
  const router = useRouter()

  useEffect(()=>{
    // resize event to when the browser is resized
    resize()
    // scroll event
    scroll()
    window.addEventListener('scroll', scroll)
    return () => {
      window.removeEventListener('scroll', scroll)
    }
  })

  return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Official Website</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <TopLayover/>
        <div className="main-container">
          <PageDataContext pagesets={'home'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <Header/>
              <SectionBlocks title='project' />
              <ShortProjectView />
              <SectionBlocks title='view more' />
              <Needhelp />
              <Footer />
            </main>
          </PageDataContext>
        </div>
      </div>
    </div>
  )
}

export default Home



const scroll = () => {
  scrollAnimation('home')
}