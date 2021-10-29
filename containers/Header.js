import { useEffect, useState } from 'react'
import styles from '../styles/containers/Header.module.scss'

export function Header(props){

    const [visible, setVisible] = useState(true);
    const [background, setBackground] = useState(false);
    let val;

    function goToAbout(){
        window.scrollTo({
            top: props.pag2.current.offsetTop,
            behavior: 'smooth'
        })
    }

    function goToGalery(){
        window.scrollTo({
            top: props.pag3.current.offsetTop,
            behavior: 'smooth'
        })
    }

    function goToServices(){
        window.scrollTo({
            top: props.pag4.current.offsetTop,
            behavior: 'smooth'
        })
    }

    function goToDepositions(){
        window.scrollTo({
            top: props.pag5.current.offsetTop,
            behavior: 'smooth'
        })
    }

    function goToContact(){
        window.scrollTo({
            top: props.pag6.current.offsetTop,
            behavior: 'smooth'
        })
    }

    function handleScroll(){
        if(window.pageYOffset > 50){
            setBackground(true);
        }else{
            setBackground(false);
        }
        if(window.pageYOffset > val && window.pageYOffset > 400) {
            setVisible(false);
            
        }else{
            setVisible(true);
        }
        val = window.pageYOffset    
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    return(        
        <div 
            className={styles.container} 
            style={{
                top: !visible ? -200 : 0, 
                background: background ? 'rgb(27, 27, 27)' : 'transparent',
                boxShadow: background ? '0px 4px 5px rgba(0, 0, 0, 0.5)' : 'none'
            }}
        >
            <a onClick={() => goToAbout()}>SOBRE</a>
            <a onClick={() => goToGalery()}>GALERIA</a>
            <a onClick={() => goToServices()}>SERVIÇOS</a>
            <a onClick={() => goToDepositions()}>DEPOIMENTOS</a>
            <a onClick={() => goToContact()}>CONTATO</a>
        </div>
    )
}