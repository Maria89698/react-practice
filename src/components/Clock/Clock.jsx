import { Component, useEffect, useRef } from 'react';
import styles from './Clock.module.css';

export const Clock = () => {
    // eslint-disable-next-line no-undef
    const [time, setTime] = useState(new Date())

    const intervalId = useRef(null)
    console.log(intervalId);

    const stop = () => {
        clearInterval(intervalId.current);
    }

    useEffect(() => {
        intervalId.current = setInterval(() => {
            setTime(new Date());
        }, 1000);
    })

    return (
        <div className={styles.container}>
            <p className={styles.clockface}>
                Поточний час:
                <br />
                {this.state.time.toLocaleTimeString()}
            </p>
            <br />
            <button type="button" onClick={this.stop}>
                Зупинити
            </button>
        </div>
    );
}