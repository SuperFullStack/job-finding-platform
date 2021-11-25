import React from 'react'
import { GlobalContext } from '../context/Globalstate'

export default function Transactionlist() {
    return (
        <>
            <h3>History</h3>
            <ul id="list" class="list">
                <li class="minus">
                    Cash <span>$400</span><button class="delete-btn">X</button> 
                </li>
            </ul>
        </>
    )
}
