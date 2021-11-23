import React, {createContext, useReducers} from 'react';

const initialState = {
    transactions:[
        {id:1, text:'Flower',amount:-20},
        {id:2, text:'Salary', amount:300},
        {id:3, text:'Book', amount:-10},
        {id:4, text:'Camers', amount:150}
    ]
}

export const GlobalContext= createContext();