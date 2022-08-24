import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import { useState } from 'react';
import axios from "axios";

import Counter from './components/Counter';
import { initialPokemon } from './data/initialPokemon'

import Loader from './components/loader/Loader'

import Search from './components/search/Search'
import Pokemon from './components/PokemonCard/card/Card'
import { useAxiosPokeApi } from './hooks/useAxios';

function App() {

  // const [data, setData] = useState('')
  const { data, isLoading, error, handleSubmit } = useAxiosPokeApi()

  return (
    <>
      {/* <Provider store={store}> */}
      {/* <Counter /> */}
      <Search handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {error && <h2 style={{ color: "#F24C4C" }}>{error}</h2>}
      {data && <Pokemon {...data} />}
      {/* </Provider> */}
    </>
  );
}

export default App;
