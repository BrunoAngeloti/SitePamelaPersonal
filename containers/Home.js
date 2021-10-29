import styles from '../styles/containers/Home.module.scss'

export function Home(props){
    return(
        <div ref={props.referencia} className={styles.container}>
            <img src="/Pamela1.png"/>
            <div className={styles.textArea}>
                <p>Olá, </p>
                <p>sou <strong>Pâmela Cristina</strong></p>
                <p>Personal trainer e faixa marrom de kickboxing</p>

                <button>COMECE HOJE</button>
            </div>
        </div>
    )
}