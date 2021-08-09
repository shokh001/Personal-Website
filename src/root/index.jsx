import React, { useState, useEffect } from 'react';
import About from '../components/About'
import Contact from '../components/Contact'
import Experience from '../components/Experience'
import Loader from '../components/Loader';
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import PositionItems from '../components/PositionItems'
import Work from '../components/Work'
import WorkTwo from '../components/WorkTwo'
import './root.scss'

const Root = () => {

  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
    }, 2000);
  }, []) 

  return (
    spinner ? <Loader /> :
      <div className="root">
        <PositionItems />
        <Navbar />
        <Main />
        <About />
        <Experience />
        <Work />
        <WorkTwo />
        <Portfolio />
        <Contact />
      </div>
  )
}

export default Root
