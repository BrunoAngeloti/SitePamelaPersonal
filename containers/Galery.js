import styles from '../styles/containers/Galery.module.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export function Galery(props){
    
    return(
        <div ref={props.referencia} className={styles.container}>
            <h1>Galeria</h1>
            <div className={styles.content}>
                <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} >
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg" />
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.jpg" />
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.jpg" />
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg" />
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.jpg" />
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.jpg" />
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg" />
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.jpg" />
                    </div>
                    <div>
                        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.jpg" />
                    </div>
                </Carousel>
            </div>
        </div>
        
        
    )
}