import styles from '../styles/pages/Main.module.scss'

import React, { useRef, useEffect, useState } from 'react'

import { Home } from '../containers/Home'
import { About } from '../containers/About'
import { Header } from '../containers/Header'
import { Galery } from '../containers/Galery'
import { Services } from '../containers/Services'
import { Depositions } from '../containers/Depositions'
import { Contact } from '../containers/Contact'
import { Footer } from '../containers/Footer'


export default function Main() {
  const home = useRef(null);
  const about = useRef(null);
  const galery = useRef(null);
  const services = useRef(null);
  const depositions = useRef(null);
  const contact = useRef(null);

  const [buttonTop, setButtonTop] = useState(false);

  function handleScroll(){
    if(window.pageYOffset > 100){
      setButtonTop(true);
    }else{
      setButtonTop(false);
    }
  };

  function goToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setButtonTop(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className={styles.container}>
        <Header pag1={home} pag2={about} pag3={galery} pag4={services} pag5={depositions} pag6={contact}/>
        <Home referencia={home}/>
        <About referencia={about}/> 
        <Galery referencia={galery}/>
        <Services referencia={services}/>
        <Depositions referencia={depositions}/>
        <Contact referencia={contact}/>
        <Footer />
        {
          buttonTop && (
          <button onClick={() => goToTop()} className={styles.buttonGlobal}>
              <img src="/arrow-up.svg" alt="imagem seta" />
          </button>
          )
        }
    </div>
  )
}
