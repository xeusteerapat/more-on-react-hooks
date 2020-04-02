import React, { useState } from 'react';
import Toggler from './Toggler';
import Form from './Form';
import FormWithHooks from './FormWithHooks';
import StarWarApi from './StarWarApi';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Counter is: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <Toggler />
      <Form />
      <FormWithHooks />
      <StarWarApi />
    </div>
  );
}

export default App;
