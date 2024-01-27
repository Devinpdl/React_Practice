// import { useState } from 'react'
// //this useState is the react Hooks which helps to change the state of variable in diffn methods.
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
// //  let ourvalue= useState(15);
// //This is wrong, actually from useState we can get 2 things in array format. i.e; 
// //useState(initialValue) returns a pair [currentValue , setCurrentValue]
// // const [counter,setCounter]=useState(7) //here count will be current value and
// //setCount will be function to update that value
//  //useState returns an array with two values first value is the current state and second one setCounter is a
//  //function to update that state (i.e; counter).
//  //You can also use any word as you wish where setCounter is named. Like; you can name it as myHero;
//  const [counter,myHero]=useState(7)
//  //Here, 7 means you've given a value 7 to the variable counter..
//  //You can give default value in useState() as you wish.. Like;
//  // ..Like; useState(true), useState(false), useState('AnyString') , useState({Objects}) or
//  // useState([Array]) etc...
//   // let counter = 7;
//   let addMe = () => {
//     // console.log('Value is added', parseInt(Math.floor(Math.random() * 100)));
//     if(counter<15){

//     console.log('Clicked',counter);
//     // counter = counter +1;
//     //Here we are using setCounter instead of counter because setCounter is used for updating the state
//     myHero(counter+1 ) ;
//     //Value is increasing in console but not inside body or UI right?
//     //Note; when there's a situation that you clicked in one element but there's changes in five places..
//     //thus, React want to tell you that what you want to change inside UI it's undeterminable by user.
//     //But, it's determined by React. So the game of React came into play.
//     //So, we can say React does react under the variables updation.. we can say for this reason;
//     //It's reactive library where there's change in one varible it does react everywhere..
//     }
//   };
//   let removeMe = () =>{
//     if(counter>0){
//     myHero(counter-1);
//     }
//   };
//   console.log("The Current Value of Counter: ",counter)

//   return (
    
//     <>
//      <h1>Our Heading</h1>
//      <h2>Counter Value: {counter}</h2>
//      <button
//       //  onClick={() => setCount(count + 1)}
//      onClick={addMe}
//      //Let counter may be inside Add value, Remove value and everywhere..
//      >Add Value {counter}</button>
//      <br />
//      <button
//      onClick={removeMe}
//      >Remove Value {counter}</button>
//      <p> Path : {counter}</p>
//     </>
//     //Thus to change the value of counter in different element then the play of Hooks came into play..
//     //Hooks are functions that allow us to “hook” into React state and lifecycle
//     //From the official documentation: https://reactjs.org/docs/hooks-intro
//   );
// }

// export default App

import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(7);

  useEffect(() => {
    console.log("The Current Value of Counter:", counter);

    // Cleanup function to avoid logging on component unmount
    return () => {
      console.log("Component unmounted");
    };
  }, [counter]); // Run the effect whenever the counter changes

  // const addMe = () => {
  //   if (counter < 15) {
  //     setCounter(counter + 1);
  //     console.log('Clicked', counter);
  //   }
  // };
  //Now, for the Interview perspective, lets we assign setCounter multiple times inside addMe arrow func
  // const addMe = () => {
  //   if (counter < 15) {
  //     setCounter(counter + 1);
  //     setTimeout(() => setCounter(counter + 1), 3000);
  //     setInterval(() => setCounter(counter + 1), 5000);
  //     //Here, what's happening do you note that?
  //      //Here, what's happening do you note that?
  //     /*
  //     The issue you're encountering is related to the closure and asynchronous nature of the addMe function.
  //     In this code block, when you call setInterval and setTimeout, 
  //     they capture the current value of counter from the closure. 
  //     The issue is that when the functions inside setTimeout and setInterval are executed, 
  //     they are using the old value of counter, not the updated one.
  //     ------------------------------
  //     To fix this problem, you should use the functional form of setCounter,
  //     which receives the current state as an argument and returns the new state. 
  //     This ensures that you are always working with the latest state value as like below;
  //     */
  //     console.log('Clicked', counter);
  //   }
  // };
  // const addMe = () => {
  //   if (counter < 15) {
  //     setCounter((prevCounter) => prevCounter + 1);
  
  //     setTimeout(() => {
  //       setCounter((prevCounter) => prevCounter + 1);
  //     }, 3000);
  
  //     setInterval(() => {
  //       setCounter((prevCounter) => prevCounter + 1);
  //     }, 5000);
  
  //     console.log('Clicked', counter);
  //   }
  // };
  //Here again you can face issues..what issues? The value of counter goes behind 15 right?
  /*
  The issue with the counter going beyond 15 and increasing continuously is related to the asynchronous nature 
  of setTimeout and setInterval functions. When you click the "Add Value" button, 
  you are scheduling multiple updates to the counter state within a short period of time.
  Here, 1) The first setCounter updates the state immediately when you click the button.
2)The setTimeout schedules another state update to occur after 3000 milliseconds (3 seconds).
3)The setInterval schedules repeated state updates to occur every 5000 milliseconds (5 seconds).
Since these updates are scheduled asynchronously, they don't wait for the previous ones to finish. As a result, the state updates stack up, and you see the counter increasing rapidly beyond 15.

To fix this, you can clear the interval when the counter reaches a certain value to stop further updates. 
Here's an example:
  */
// const addMe = () => {
//   if (counter < 15) {
//     setCounter((prevCounter) => prevCounter + 1);

//     setTimeout(() => {
//       setCounter((prevCounter) => prevCounter + 1);
//     }, 3000);

//     const intervalId = setInterval(() => {
//       setCounter((prevCounter) => prevCounter + 1);
//     }, 5000);

//     // Clear the interval after a certain time (e.g., 15 seconds)
//     setTimeout(() => {
//       clearInterval(intervalId);
//     }, 15000);

//     console.log('Clicked', counter);
//   }
// };
//Now, This code stops the interval after 15 seconds by calling clearInterval(intervalId).

//Now, for another interview persceptives;.. Let;
// const addMe = () => {
//     if (counter < 15) {
//       setCounter(counter+1);
//       setCounter(counter+1);
//       setCounter(counter+1);
//   //Here after setting counter for the 3 times then there comes an answer will be 10 inside your mind right?
// //No, Your Answer is wrong.. When you click Add Value button then in one click only one value get updated..
// /* So, it won't directly update to 10 when you clicked button just for once...
// It's so because, here the function calls will be sent in batches.
// So, react will see them as the same operation and perform it only once.
// So, the counter will increase by only 1 count.
// Thus, In this code, when the "Add Value" button is clicked, the setCounter function is called three times consecutively, 
// each time attempting to increment the counter by 1. However, React batches state updates that occur 
// in the same event loop cycle, treating them as the same operation. As a result, the counter 
// will increase by only 1 count despite three calls to setCounter.
// Now, To fix this problem and ensure that the counter increments by 3 with each click, 
// you can use the functional form of setCounter. 
// The functional form of setCounter takes the previous state as an argument and returns the updated state. 
// This ensures that each update is based on the latest state..
// */
//       console.log('Clicked', counter);
//     }
//   };

const addMe = () => {
  if (counter < 15) {
    // Use the functional form of setCounter or passing a callback to setCounter ensures that 
    //you always get the latest state value, preventing the stale closure problem.
    //It allows React to correctly apply the updates based on the current state, leading to the expected behavior.
    /*Here, prevCounter variable is used to access the previous state value of the counter variable.
    You can even also give prevCounter as any name even as myCounter, oldCounter, getCounter, etc etc.. 
    This is achieved by using the functional form of the setCounter function, 
    which takes a callback function as an argument.
    */
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);
    setCounter(prevCounter => prevCounter + 1);

    console.log('Clicked', counter);
  }
};


  
  const removeMe = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log('Clicked', counter);
    }
  };

  return (
    <>
      <h1>Our Heading</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addMe}>Add Value {counter}</button>
      <br />
      <button onClick={removeMe}>Remove Value {counter}</button>
      <p> Path : {counter}</p>
    </>
  );
}

export default App;
