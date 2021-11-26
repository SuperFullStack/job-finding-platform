import React from 'react'
import { GlobalContext } from '../context/Globalstate'
import { useContext } from 'react'

export default function Transactionlist() {
    const {transactions}=useContext(GlobalContext);

    console.log(transactions);
    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                {transactions.map(transaction=>(<li class="minus">
                    {transaction.value} <span>$400</span><button class="delete-btn">X</button> 
                </li>))}
                
            </ul>
        </>
    )
}
