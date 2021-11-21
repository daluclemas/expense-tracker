import React , { useContext } from 'react';
import MyContext from '../reducers/ContextCreate';
import style from './Balance.module.css';


const Balance = () => {

    const {transaction} = useContext(MyContext);

    const amounts = transaction.map(item=>item.amount);

    const total = amounts.reduce((acc,item)=>{
        return acc + item;
    },0).toFixed(2);


    return (
        <div className={`col-12 ${style.balanceDisplay}`}>

            <h3 className = {style.balanceText}>your balance</h3>
            <p className = {style.balance}>
                <span>$</span>

               {total}
                
            </p>
        </div>
    )
}

export default Balance;
