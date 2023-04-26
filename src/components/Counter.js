import React, { useState} from "react";


function Counter() {
  const [count, setCount] = useState(0);
  
  function increment() {
    // using arrow functions
    setCount((currentCount) => currentCount + 1);
    setCount((currentCount) => currentCount + 1);

  }
  return <div onClick={increment}>{count}</div>;
}
export default Counter;

  // function increment() { 
  //   // this way logs in the previous number and not the current number on the browser
  //   console.log(count)
  //   // call setCount twice, to update the counter by two every time we click
  //   // when calling it twice does not change the count for its rendering 1 increment only not 2
  //   setCount(count + 1);
  //   // logs the previous count on the console and current count on the browser.
  //   console.log(count)
  //   setCount(count + 1);
  //   // logs the current count on browser but not the previous count, on the console reflects the previous count
  //   console.log(count)

  //   // seting the count once does the trick.
  //   // setCount(count + 4)
  //   // setCount(count + 2);
  // }

//   return <div onClick={increment}>{count}</div>;
// }
// export default Counter;


// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     console.log(`before setState: ${count}`);
// // what matters is the set count number either + or -1
//     setCount(count + 1);

//     console.log(`after setState: ${count}`);
//   }

//   return <div onClick={increment}>{count}</div>;
// }
// export default Counter;





// function Counter() {
//   const [count, setCount] = useState(10);

// // with this method changing the function variable does  not affect the code 
//   function decrement() {
//     // console.log(`before setState: ${count}`);

//     // setCount(count + 1);

//     setCount(count -1);

//     console.log(`after setState: ${count}`);
//   }

//   // return <div onClick={increment}>{count}</div>;
//   return <div onClick={decrement}>{count}</div>;
// }
// export default Counter;




//  Trying off things in  the code...

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count -1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;


// function Counter() {
//   const [count, setCount] = useState(100);
//   //  changing the function variale from increment to decrement doesn't work affect code untill you pass in the write number format.
//   function decrement() {
//     setCount(count + 1);
//   }
// // 
//   return <button onClick={decrement}>I have been clicked {count} times</button>;
// }

// export default Counter;


// // changing the function still works uninterapted
// function Algorithims() {
// // useState starts from the value its passed to it either down or up
//   const [Use, setUse] = useState(1000);

//   function increment() {
//     // the function increment variable does not affect the value passed in either - or +
//     setUse(Use - 1);
//   }

//   return <button onClick={increment}>I have been clicked {Use} times</button>;
// }

// export default Algorithims;

// function Counter() {
//   const [count, setCount] = useState(0);

//   function increment() {
//     setCount(count + 1);
//   }

//   return <button onClick={increment}>I have been clicked {count} times</button>;
// }

// export default Counter;
