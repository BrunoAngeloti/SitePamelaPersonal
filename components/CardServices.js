import styles from '../styles/components/CardServices.module.scss'

export function CardServices(){
    return(
        <div className={styles.container}>
            <div>
                <img src="iconService.svg" alt="icone peso" />
                <h2>Personal trainer</h2>
            </div>
            <button>SOLICITAR ORÇAMENTO</button>
        </div>
    )
}