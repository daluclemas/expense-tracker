import React from 'react';
import Button from './Button';
import styles from './AddTransaction.module.css';


const AddTransaction = ({ handletextChange,handleSubmit,handleamountChange, clickBtn }) => {
    return (
        <div className={`col-12 ${styles.formContainer}`}>
            <h3>add new transaction</h3>

            <form onSubmit = {handleSubmit}>
                <div>
                    <label htmlFor="id" className={`${styles.labelText}`}>text</label>
                    <input type="text" placeholder="enter text..." onChange={handletextChange} />
                </div>

                <div>
                    <label htmlFor="amt" className={` ${styles.labelText} ${styles.dFlex}`}>
                        amount
                        <br />(negative - expense, positive - income)
                    </label>
                    <input type="number" placeholder="enter amount..." onChange={handleamountChange} />
                </div>

                <Button clickBtn = {clickBtn} />
            </form>
        </div>
    )
}

export default AddTransaction
