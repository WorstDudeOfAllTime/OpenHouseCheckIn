import styles from '../../styles/ThankYou.module.css'
import {name} from '/comps/InputForm';

export default function ThankYou() {
  return (
        <div className={styles.thankYouBox}>
              <h1 className={styles.ThankYou}>{`Thank you, ${name}!`}</h1>
        </div>
 )
}