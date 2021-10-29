import { Bar } from '../components/Bar'
import styles from '../styles/containers/About.module.scss'

export function About(props){
    return(
        <div ref={props.referencia} className={styles.containerAbout}>
            <div className={styles.textAreaAbout}>
                <h1>Pâmela Cristina Pires</h1>
                <p>Graduada em Educação Física - MULTIVIX</p>
                <p>Meu nome é Pâmela Cristina, tenho 25 anos e moro em Jacaraípe - Serra. Sou recém formada em educação física e faixa marrom em kickboxing.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.</p>
                <Bar type="1"/>
            </div>
            <img src="/Pamela2.png"/>          
        </div>
    )
}