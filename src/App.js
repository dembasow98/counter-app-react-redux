import React, { useState } from 'react';

import counterStore from './store';

function App() {

  const [counter, setCounter] = useState(0);

  //Increment the counter by 1
  const increment = () => {
    counterStore.dispatch({type: 'INCREMENT'});
    setCounter(counterStore.getState().count);
  }

  //Decrement the counter by 1
  const decrement = () => {
    counterStore.dispatch({type: 'DECREMENT'});
    setCounter(counterStore.getState().count);
  }


  return (
    <div className="flex flex-col w-full h-screen dark:bg-gray-900 dark:text-white items-center">
      <div className="flex flex-col w-full h-full items-center justify-center dark:bg-gray-800 m-36 p-10 max-w-xl">
        <div className="flex flex-col w-full h-full items-center justify-center">
          <h1 className="text-4xl font-bold">Counter</h1>
          <div className="flex flex-row w-full h-full items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l" onClick={decrement}>-</button>
            <div className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 font-bold py-2 px-4">
              {counter}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r" onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
