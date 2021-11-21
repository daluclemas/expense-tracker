import React , { useContext } from 'react';
import MyContext from '../reducers/ContextCreate';
import TransactionList from './TransactionList';
import style from './Transaction.module.css';

const Transaction = ({delTransaction}) => {

    const {transaction} = useContext( MyContext);
    // console.log(transaction)


    return (
        <div className={`col-12 ${style.historyContainer}`}>

        <h3 className={style.history}>history</h3>

            {/* list div */}

             <ul>

              
                {transaction.map  (item=>{

                    return <TransactionList key = {item.id} transaction={item} delTransaction = {delTransaction} />
                })}
            
            </ul>
            
            

            {/* <ul>
                {transaction.map(item=>{

                    return <TransactionList key = {item.id} transaction={item} delTransaction = {delTransaction} />
                })}
            </ul> */}
            
            
        </div>
    )
}

export default Transaction
