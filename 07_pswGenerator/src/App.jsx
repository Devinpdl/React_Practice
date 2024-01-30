import { useState ,useCallback, useEffect, useRef } from 'react'

function App() {
  const [len, setLen]  = useState(10);
  const [allownum, setAllownum] = useState(false);
  const [allowchar, setAllowchar] = useState(false);
  const [password, setPassword] =useState('');

  // useRef hook
  const passwordInputRef = useRef(null)

  // method to generate password, useCallback() function is used for memoization and keep it in cache..
  const generatedPsw = useCallback(()=>{
    //Here, useCallback is used to memoize the function so that it doesn't re-render every time state changes.
    //useCallback takes 2 parameter; one is a function and another a default parameters in an array .
    //It returns a memoized version of the callback that only recomputes when one of the
    //dependencies (first argument) changes.
    //For to memorize just remember this syntax.. useCallback(fn, [and a list of dependencies..])
    let pass='';
    let strng ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    //Here, strng will get this a-z data which then may be used to generate password

    if(allownum){
      strng += "0123456789";
    }
    if(allowchar){
      strng+= `!@#$%^&*()[]+-={};',./~`;
    }
    for (let i = 1; i < len; i++) {
      let holdpsw = Math.floor(Math.random()*strng.length+1);
      //Here holdpsw is holding the random index value of the string length of above strng variable
      //Now, we'll extract that character from random index value and add it into our pass variable

      pass += strng.charAt(holdpsw);
      //charAt returns the character at the specified index.
      
    }
    //Now, if above pass variable indicate 'pass' is declared but its value is never read..then do this;

    setPassword(pass);

  }, 
    
    [len, allownum, allowchar, setPassword])
    //Here, we give the references of setPassword because we want our code much more optimized.
    //This is called dependency list. It tells React what values should cause useCallback to recompute..

    // generatedPsw();
    //Here, we can't call this function directly in jsx because it is not a pure function so React won't re-render
    //So, we use another method..
    //We can call the function inside useEffect hook as shown below:
    
    useEffect(()=>{
      generatedPsw();
    }, [len,allownum, allowchar,  generatedPsw]);//This means that generatedPsw will run every time any of these values change

    // const copyPasswordToClipboard= useCallback(() => {
    //   // passwordRef is used to check whether there is current object or not,accessible or not,selective or not
    //   window.navigator.clipboard.writeText(password)
    //   .then(() => alert("Password copied!"))
    //   .catch((err) => alert(`Error ${err}`));
    //   //It do copies the password from password input field
    // }, 
    //   [password])

    const copyPasswordToClipboard = useCallback(() => {
      // passwordRef is used to check whether there is current object or not,accessible or not,selective or not
      passwordInputRef.current?.select();
      // selecting range
      passwordInputRef.current?.setSelectionRange(0, 100)
      window.navigator.clipboard.writeText(password)
    }, [password]) 

  return (
    <>
     {/* <h1 className='text-3xl text-center text-white'>Password Generator</h1> */}
     {/* It's just used for testing.. Now we design our actual UI.. */}
     <div className="w-full max-w-wd mx-auto text-black shadow-md
  rounded-2xl px-5 my-10 bg-gradient-to-r from-blue-500 to-purple-500">
    <h1 className="text-white text-center my-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text"
    value={password}
    className='outline-none w-full py-2 px-4 rounded-md'
    placeholder='Here shows Password'
    readOnly
    //Now, we want to take the references of password input field right for to copy in clipboard..
    //So, now we define the references as;
    ref={passwordInputRef}
    />
    <button
    onClick={copyPasswordToClipboard}
    className='outline-none bg-orange-600 text-white py-2 px-3 
    shadow-sm transition-all duration-300 hover:bg-orange-700 cursor-pointer'
    
    >Copy</button>

      </div>
      <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={7} max={100}
        className="cursor-pointer"

        onChange={(e) => {
          setLen(e.target.value)
        }}
        
        />
        <label>Length: {len}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked={allownum}
          id="allowNum"
          onChange={()=>{
            setAllownum((prev) => !prev);
          }}

          />
          <label htmlFor="allowNum">Numbers (0-9)</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input
            type="checkbox"
            defaultChecked={allowchar}
            id="allowChar"
            // onClick={()=>{setAllownum(true)}}  // Disable numbers if characters are allowed
            // Here, we can't do true because once you set true then it will be always true even when the checkbox is unchecked
            onClick={()=>{
              setAllowchar((prev)=> !prev);
              // Now, when the functional App component do get re-rendered then it will take the previous value
              // of allowChar and update that in the state. So, thus allows us to change the state..
              //But above line onClick={()=>{setAllownum(true)}} will not able to set allowchar to set true/ false accordingly.
            }}
              
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
     </div>
    </>
  )
}

export default App
