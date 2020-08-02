import React, {useEffect} from 'react'
import Head from 'next/head'
import {PageDataContext} from '../../utils/context/pageContext'
import {resize} from '../../utils/common/common'
import TopLayover from '../../components/TopLayover/TopLayover'
import Navbar from '../../components/Navbar/Navbar'
import Menu from '../../components/MenuContainer/MenuContainer'
import Header from '../../containers/IndividualProject/Header'
import ProjectBody from '../../containers/IndividualProject/ProjectBody'
import Footer from '../../components/Footer/Footer'

function Projects () {

  useEffect(() => {
    // resize event to when the browser is resized
    resize()
  })

   return (
    <div className="container">
      <Head>
        <title>Aiman Adlawan | Reservation-App</title>
        <link rel="icon" href="/images/brand-icon-logo.ico" />
      </Head>

      <div className="container">
        <TopLayover/>
        <div className="main-container">
          <PageDataContext projectsets={'reservation-app'}>
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
    </div>
  )
}

export default Projects
