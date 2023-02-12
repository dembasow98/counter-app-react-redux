import './App.css';

import counterStore from './store';

function App() {

  //Increment the counter by 1
  const increment = () => {
    counterStore.dispatch({type: 'INCREMENT', payload: 1});
  }

  //Decrement the counter by 1
  const decrement = () => {
    counterStore.dispatch({type: 'DECREMENT', payload: 1});
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Counter React Redux App
        </p>
        <div className="App-body">
        <div className="App-body-counter">
          <p>Counter:{counterStore.getState().count}</p>
        </div>
        <div className="App-body-buttons">
          <button onClick={decrement}>Decrement</button>
          <button onClick={increment}>Increment</button>
        </div>
        </div>
      </header>
    
    </div>
  );
}

export default App;
