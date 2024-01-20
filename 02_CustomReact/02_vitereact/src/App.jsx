import Anyfn from "./ourfile"
function App() {
  // return (
  //   <Anyfn/>
  //   // <h1>Hello from React with vite |  Testing Okay</h1>
  //   //It gives error because JSX has rule that only one element can be return.
  //   //So we wrap it in a div or any other html tag to make it valid.
  //   //let's see below.
  // )
  // return (
  //   <>
  //   <Anyfn/>
  //   <h1>Testing in a JSX element Okay</h1>
  //   <p>We can pass More element after passing fragment like <> </> or <div>Div</div></p>
  //   </>'

  //..For the part; ... Let's see how we do inject variables and Javascript do get injected;

  const username="Devin_paudyal";
    
    
  // ) 
  //... Let's see how we do inject variables and Javascript do get injected;
  // Place <App /> in main.jsx
  return (
    <>
    <Anyfn/>
    <h1>Testing in a JSX element Okay</h1>
    <p>We can pass More element after passing fragment like <> </> or <div>Div</div></p>
    <h2>Your Username is: {username}</h2>
    </>
    
    
  )
  //Thus in React everything you define as curly braces {} it'll treat as Variables.
  //As we do $ in javascript like, '${}', Okay?
  // For Interview perspective , above  {username} is evaluated expression.
  //That means, we don't write Javascript in a whole..
  //We just write the final outcome of javascript that which is already evaluated..
  //Thus, you can't write it as;
  /*
  <h2>Your Username is: {isloggedin(username) username}</h2>
  So, whatever the evaluation or condition check work may be there, you've to do it inside function
  before returing elements or do evaluation or condition check outside of the function.
  
  */


}

export default App
