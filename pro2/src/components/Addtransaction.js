import React from 'react'
import { useState } from 'react'
import { useContext } from 'react';
import { GlobalContext } from '../context/Globalstate';


export default function Addtransaction() {
  const [text,setText]= useState('');
  const[amount,setAmount]= useState(0);

  const {AddTransaction}=useContext(GlobalContext);

  
    return (
        <>
        <h3>Add new transaction</h3>
        <form >
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e)=> setText(e.target.value)} 
             placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount"
              >Amount <br />
              (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} onChange={(e)=> setAmount(e.target.value)} 
            placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </>
    )
}
