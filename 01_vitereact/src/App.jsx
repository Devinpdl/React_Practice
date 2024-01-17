import Anyfn from "./ourfile"
function App() {
  // return (
  //   <Anyfn/>
  //   // <h1>Hello from React with vite |  Testing Okay</h1>
  //   //It gives error because JSX has rule that only one element can be return.
  //   //So we wrap it in a div or any other html tag to make it valid.
  //   //let's see below.
  // )
  return (
    <>
    <Anyfn/>
    <h1>Testing in a JSX element Okay</h1>
    <p>We can pass More element after passing fragment like <> </> or <div>Div</div></p>
    </>
    
    
  )

}

export default App
