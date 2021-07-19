import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // alert('useEffect');
    console.log('useEffect');
  });
  return (
    <div>
      <h1>useEffect in React {count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Counter</button>
    </div>
  );
}
