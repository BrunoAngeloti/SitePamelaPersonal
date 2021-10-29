import { CardDepositions } from '../components/CardDepositions'
import styles from '../styles/containers/Depositions.module.scss'

export function Depositions(props){
    return(
        <div ref={props.referencia} className={styles.container}>
            <div className={styles.header}>
                <h1>Depoimentos</h1>
            </div>
            <div className={styles.content}>
                <CardDepositions />
                <CardDepositions />
                <CardDepositions />
            </div>
        </div>
    )
}