import styles from "./Alert.module.css"

function Alert(props){
    return(
        <div>
            <p className={styles.alert}>{props.children}</p>
        </div>
    )
}

export default Alert;