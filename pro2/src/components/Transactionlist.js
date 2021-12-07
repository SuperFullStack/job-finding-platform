import React from 'react'
import { GlobalContext } from '../context/Globalstate'
import { useContext } from 'react'
import Transaction from './Transaction'

export default function Transactionlist() {
    const {transactions}=useContext(GlobalContext);

    console.log(transactions);
    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
                
            </ul>
        </>
    )
}
