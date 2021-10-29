import styles from '../styles/components/Bar.module.scss'

export function Bar(props){
    return(
        <div className={ props.type === '1'? styles.container : styles.container2}>
        </div>
    )
}