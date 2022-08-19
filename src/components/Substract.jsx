import React from 'react'
import { decrement } from '../actions/counterActions'
import { useDispatch } from 'react-redux'

const Substract = () => {
    const dispatch = useDispatch()
    return (
        <button onClick={() => dispatch(decrement())}>-</button>
    )
}

export default Substract