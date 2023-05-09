import React, { useState} from "react";


function Counter() {
  const [count, setCount] = useState(0);
  
  function increment() {
    // using arrow functions
    setCount((currentCount) => currentCount + 1);
   

  }
  return <div onClick={increment}>{count}</div>;
}
export default Counter;
