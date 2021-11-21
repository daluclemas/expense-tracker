import React,{ useReducer, useState } from 'react';
import AppReducer from './reducers/AppReducer';
import './App.css';
// import { BrowserRouter as Router, Switch, Link, Route,  } from 'react-router-dom';

import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transaction from './components/Transaction';
import AddTransaction from './components/AddTransaction';

import MyContext from './reducers/ContextCreate';

const initialState = {

  transaction:[
      // {id:1, text: ' flower', amount: 420},

      // {id:2, text: ' salary', amount: -40},

      // {id:3, text: ' book', amount: 100},

      // {id:4, text: ' camera', amount: -20},

  ]
}


function App() {

  const [text, setText] = useState('');
  const [amount, setAmount]  = useState(0);

  const [state, dispatch] = useReducer(AppReducer,initialState);

  // actions

  const delTransactions = (id) =>{
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    })
  }

  const handletextChange = (e) =>{
    setText(e.target.value);
  }

  const handleamountChange = (e) =>{
    setAmount(e.target.value);
  }

  const handleSubmit = (e)=>{

    e.preventDefault();

   
    // console.log(e.target)
    

  }

  const addTransaction = (transaction) =>{
    dispatch({

      type:'ADD_TRANSACTION',
      payload: transaction

    })
  }

  const clickBtn = ()=>{

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text: text,
      amount: Number(amount)
    }

    if(text.trim() !== '' & amount !== ''){

      addTransaction(newTransaction);

    }else{

      return false;
    }

    
  }


  return (

    <MyContext.Provider value = { state }>

      <div className = 'container'>

        <Header />

        <Balance />

        <IncomeExpense />

        <Transaction delTransaction = {delTransactions} />

        <AddTransaction handletextChange = {handletextChange} handleSubmit={handleSubmit} handleamountChange = {handleamountChange} clickBtn = {clickBtn}  />

      </div>
      
    </MyContext.Provider>

   

  );


  
}

export default App;
