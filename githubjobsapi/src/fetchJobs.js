import { useReducer, useEffect } from "react"
import axios from "axios"

const ACTIONS={
    MAKE_REQUEST: 'make-request',
    GET_DATA:'get-data',
    ERROR:'error'
}

const base_url="https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";
function reducer(state,action){
    switch(action.type){
        case ACTIONS.MAKE_REQUEST:
            return { loading:true ,jobs:[] }
        case ACTIONS.GET_DATA:
            return {...state, loading:false, jobs:action.payload.jobs }
        case ACTIONS.ERROR:
            return {...state, loading:false, jobs:action.payload.error, jobs:[] }
        default:
            return state
    }
}


export default function fetchJobs(params, page){
    const [state,dispatch]=useReducer(reducer,{ jobs:[], loading:true })

    useEffect(()=>{
        dispatch({type: ACTIONS.MAKE_REQUEST})
        axios.get(base_url)
    },[params,page])
    return {
        jobs:[],
        loading:false,
        error:false,
    }
}