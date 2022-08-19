import { createStore } from 'redux'
import reducer from '../reducers.js'

const store = createStore(reducer)

store.subscribe(() => console.log("Cambio el estado"))

export default store