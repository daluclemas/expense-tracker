import React , { useContext } from 'react';
import MyContext from '../reducers/ContextCreate';
import style from './IncomeExpense.module.css';

const IncomeExpense = () => {

    const { transaction } = useContext(MyContext);

    const amounts = transaction.map(item=>item.amount);

    const expense = amounts.filter(item=>{
        return item < 0
    }).reduce((acc,item)=>acc + item,0);

    const income = amounts.filter(item=>{
        return item > 0
    }).reduce((acc,item)=>acc + item,0);
    


    return (

        <div className={`col-12 ${style.incomeExpense}`}>
            
            <div className={style.incomeDiv}>
                <h4>income</h4>
                <p>
                    <span>$</span>

                    {Math.abs(income).toFixed(2)}
                </p>
            </div>

            <hr />

            <div className={style.expenseDiv}>
                <h4>expense</h4>
                <p>
                    <span>$</span>

                    {Math.abs(expense).toFixed(2)}
                </p>
            </div>


        </div>
    )
}

export default IncomeExpense
