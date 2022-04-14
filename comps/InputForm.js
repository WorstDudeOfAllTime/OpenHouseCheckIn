import Link from "next/link";
import styles from "../styles/Home.module.css";

export let name = "";
const getName = () => {
    name = document.getElementById("nameBox").value;
};
const InputForm = () =>{
    return (
        <div className={styles.checkIn}>
          <form className={styles.checkInForm}>
            <label className={styles.labels}>
              {" "}
              Name:
              <input
                id="nameBox"
                className={styles.input}
                type="text"
                placeholder="Enter your name"
              />
            </label>
            <label className={styles.labels}>
              {" "}
              Phone:
              <input
                className={styles.input}
                type="text"
                placeholder="Enter your phone number"
              />
            </label>
            <label className={styles.labels}>
              {" "}
              Email:
              <input
                className={styles.input}
                type="text"
                placeholder="Enter your email"
              />
            </label>
            <Link href="/posts/thankyou">
              <a>
                <input
                  onClick={getName}
                  className={styles.submitBtn}
                  type="submit"
                />
              </a>
            </Link>
          </form>
        </div>
    );
}

export default InputForm;