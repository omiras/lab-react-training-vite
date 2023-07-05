import styles from './Random.module.css';

export default function Random({ min, max }) {

    const randomNumber = Math.random() * max + min;

    return <div className={styles["container-fluid"]}>
        Random value between {min} and {max} =&gt; {Math.round(randomNumber)}
    </div>
}