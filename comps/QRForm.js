import styles from '../styles/QRBox.module.css'
let address = "1718 Jackson St"
export default function QRForm(){
    return (
        <div className={styles.lowerHalf}>
            <h1>{`Welcome to ${address}!`}</h1>
            <div className={styles.qrbox}></div>
            <h2>Please scan to check in!</h2>
        </div>
    )
}