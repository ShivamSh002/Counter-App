import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Counter :</h2>
      <div>
        <button className='btn' onClick={decrement}>-</button>
        <span>{count}</span>
        <button className='btn' onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
