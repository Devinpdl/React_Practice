import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Functional component App
const App = () => {
  // // Using a JavaScript variable instead of state for demonstration purposes
  // let multiplyValue = 1;

  // State for the main value
  const [mainValue, setMainValue] = useState(1);

  // State for the multiplied value
  // const [multipliedValue, setMultipliedValue] = useState(1);
  //Here, The first element (multipliedValue) is the current state value, initially set to 1.
  //The second element (setMultipliedValue) is a function that can be used to update the state value.
  //So, in the array [multipliedValue, setMultipliedValue], multipliedValue is the state variable 
  //holding the current value, and setMultipliedValue is the function to update that state. 

  //Now lets do without using these 2 states(i.e; multipliedValue and setMultipliedValue)..
  //Let we take variable for this
  let multipliedValue = mainValue *3;
  //Here, we don't need to do through the state changes method 
  //like;const [multipliedValue, setMultipliedValue] = useState(1);
  // Because as soon as we clicked Multiply by 3 button, we know the mainValue does change into 2 right?
  //I mean mainValue's useState will become useState(2) okay?
  //So, as soon as there's state change, the Functional component App gets re-render/ re-run right?
  //And here, whenever there is any change in "mainValue" it automatically updates the "multipliedValue".
  //And at the time of re-updating the value of mainValue, there's recomputing of let multipliedValue = mainValue *3;
  //Thus, we say it will automatically change the multipliedValue value and
  //that means, multipliedValue is now dependent on mainValue.
  //That's why we don't need the state for multipliedValue just like doing;
  //..like doing; const [multipliedValue, setMultipliedValue] = useState(1)


  // Function to handle the click event and update values
  const handleMultiply = () => {
    // Update the main value using the state
    // setMainValue(prevMainValue => prevMainValue + 1);
    //Here we use callback function just to solve the issue of taking previous counter/value...
    //Can be done as like this too;
    setMainValue(mainValue + 1);

    // Update the state with the new multiplied value
    // setMultipliedValue(multipliedValue*3);
    //Can be done like this;
    // setMultipliedValue(mainValue*3);
    //we don't need  setMultipliedValue(mainValue*3) when we assign multipliedValue = mainValue *3; above..

  };

  //To do this simple changes in the state people often do over engineering as like below using useEffects..;

  // useEffect to log when the component is unmounted
  // useEffect(() => {
  //   // Log a message when the component is mounted
  //   console.log('Component mounted');
  //   // multipliedValue();
  //   // Cleanup function to log when the component is unmounted
  //   return () => {
  //     console.log('Component unmounted');
  //   };
  // }, [value]); // Here, [value] is dependency array.. Which means whatever there may be changes in the value
  // we want it to run the code/ function like multipliedValue(); which is inside the useEffect..
  // To forcefully re-render the components App()/or to reload the component's body we use useEffect to change
  //acoordingly of the state changes... Here, we can also use empty array instead of }, [value].. like; }, []);
  //Empty dependency array of above means this effect runs only on mount and unmount..



  // Return JSX for rendering
  return (
    <>
      {/* Display the main value */}
      <h1>Main Value: {mainValue}</h1>

      {/* Display the multiplied value */}
      <h2>Multiplied Value: {multipliedValue}</h2>

      {/* Button to trigger the handleMultiply function */}
      <button onClick={handleMultiply}>Multiply by 3</button>
    </>
  );
};

// Export the component as the default export
export default App;
