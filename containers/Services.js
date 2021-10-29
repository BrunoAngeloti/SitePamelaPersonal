import { Bar } from '../components/Bar'
import { CardServices } from '../components/CardServices'
import styles from '../styles/containers/Services.module.scss'

export function Services(props){
    return(
        <div ref={props.referencia} className={styles.container}>
            <div className={styles.header}>
                <h1>Serviços</h1>
                <Bar type="1"/>
            </div>
            <div className={styles.content}>
                <CardServices />
                <CardServices />
                <CardServices />
            </div>
        </div>
    )
}