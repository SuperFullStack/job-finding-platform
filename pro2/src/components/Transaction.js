import React from 'react'

export default function Transaction({transaction}) {
    return (
        <div>
            <li class="minus">
                {transaction.text} <span>$400</span><button class="delete-btn">X</button> 
            </li>
        </div>
    )
}
