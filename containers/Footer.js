import styles from '../styles/containers/Footer.module.scss'

export function Footer(props){
    return(
        <div ref={props.referencia} className={styles.containerFooter}>          
            <p>Feito com ❤️ por <a href="https://github.com/BrunoAngeloti"><span>Bruno Angeloti</span></a> e <a href="https://github.com/maluarmini"><span>Maria Luiza</span></a></p>
        </div>
    )
}