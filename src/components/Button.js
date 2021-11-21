import React from 'react';
import styles from './Button.module.css';

const Button = ({ clickBtn }) => {
    return (
        <div className ={styles.btnContainer}>
            <button onClick = { clickBtn }>add transactions</button>
        </div>
    )
}

export default Button
