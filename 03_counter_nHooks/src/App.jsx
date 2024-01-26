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

  const addMe = () => {
    if (counter < 15) {
      setCounter(counter + 1);
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
