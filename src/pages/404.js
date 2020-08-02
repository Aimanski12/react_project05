import React, {useEffect} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import Menu from '../components/MenuContainer/MenuContainer'
import NotFound from '../containers/NotFound/NotFound'
import Footer from '../components/Footer/Footer'
import {resize} from '../utils/common/common'
import {scrollAnimation} from '../utils/pageanimations/scrollanimation/scrollanimation'
import {PageDataContext} from '../utils/context/pageContext'

function NotFoundPage () {

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
        <title>Aiman Adlawan | Page not found</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <div className="main-container">
          <PageDataContext pagesets={'notfound'}>
            <Navbar />       
            <Menu />
            <main className='main'>
              <NotFound />
              <Footer />
            </main>
          </PageDataContext>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

const scroll = () => {
  scrollAnimation('404')
}