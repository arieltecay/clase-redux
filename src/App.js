import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import Counter from './components/Counter';


function App() {
  return (
    <>
      <Provider store={store}>
        <h1>React - Redux - NUCBA</h1>
        <h1>React - Redux - NUCBA</h1>
        <h1>React - Redux - NUCBA</h1>
        <Counter />
        <h2>Tarea: <h3>crear los botones de +1; +5; -5; reset</h3></h2>
      </Provider>
    </>
  );
}

export default App;
