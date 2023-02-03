import styles from './Container.module.css'
function Container(props){
    return(
        <div className = {`${styles.Container} ${styles[props.CustomClass]}`}>
            {props.children}
        </div>
    )
}
export default Container