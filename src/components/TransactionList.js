import React from 'react';
import { FaTimes } from 'react-icons/fa';

import style from './TransactionList.module.css';

const TransactionList = ({transaction , delTransaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        
        <>
            <li className={`${style.listItems} ${transaction.amount < 0 ? style.expense : style.income }`}>

                <div className={style.transactionText}>

                    <button onClick = {()=>delTransaction(transaction.id)}>
                        <FaTimes />
                    </button>

               
                    <p>{transaction.text}</p>

               </div>

                <div className={style.amtDiv}>
                    <span>{sign}${Math.abs(transaction.amount)}</span>

                </div>


                
            </li>
            
        </>
    )
}

export default TransactionList
