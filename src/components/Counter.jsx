import React from 'react'
import { useSelector } from 'react-redux'
import Add from './Add'
import Substract from './Substract'


const Counter = () => {
    const state = useSelector(state => state.counter)
    console.log(state);
    return (
        <>
            <Substract />
            {state.count}
            <Add />
        </>
    )
}

export default Counter