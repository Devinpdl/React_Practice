import { useState ,useCallback, useEffect, useRef } from 'react'

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [len, setLen]  = useState(10);
  const [allownum, setAllownum] = useState(false);
  const [allowchar, setAllowchar] = useState(false);
  const [password, setPassword] =useState('');

  // useRef hook
  const passwordInputRef = useRef(null)
  //Here, we give the useRef null because it is not yet mounted.
  //If you pass a default value to useRef, that value will be returned... 

  // method to generate password, useCallback() function is used for memoization and we kept it in cache..
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
    //If we give password instead of setPassword then  every time whenever state change happens,  
    //it will cause a rerendering of whole component so it is better to avoid that by giving refs / functon.
    //This is called dependency list. It tells React what values should cause useCallback to recompute..

    // generatedPsw();
    //Here, we can't call this function directly in jsx because it is not a pure function so React won't re-render
    //So, we use another method..
    //We can call the function inside useEffect hook as shown below:
    
    useEffect(()=>{
      generatedPsw();
    }, [len,allownum, allowchar,  generatedPsw]);//This means that generatedPsw will run every time any of these values change
    //We know that whenever for the 1st time the page do loads, this useEffect gets call automatically..
    //And in the second time when any changes happen in the props or states, then also this  useEffect gets call..
    //And in the next renderings, only when any of the dependencies are changed, then also it will get called..
    //And in the second time when any other prop or state changes happen, then also this useEffect gets call..

    // const copyPasswordToClipboard= useCallback(() => {
    //   // passwordRef is used to check whether there is current object or not,accessible or not,selective or not
    //   window.navigator.clipboard.writeText(password)
    //   .then(() => alert("Password copied!"))
    //   .catch((err) => alert(`Error ${err}`));
    //   //It do copies the password from password input field
    // }, 
    //   [password])

    const copyPasswordToClipboard = useCallback(() => {
      // From, The reference we define above which is passwordInputRef now can be used to check whether
      // if there is current object or not,accessible or not,selective or not and then perform operations on it..
      passwordInputRef.current?.select();
//Here, we used select() method on passwordInputRef so that whatever written in the input field will get selected.
//Also, we used .current here because, in functional component, refs are not directly accessible.
//They are accessed through the current property.
//And when getting current value there may be a delay so we use '?' before select().
//They are available on current property.  They are accessed through current property.
/*
So, Here, passwordInputRef.current refers to the current value of the ref, which is the DOM element. 
However, if, for some reason, passwordInputRef.current is null or undefined, 
using the optional chaining operator ?. prevents a runtime error. 
If passwordInputRef.current is null or undefined, the subsequent method calls (select() 
and setSelectionRange(0, 100)) won't be executed, and the code won't break.
This is particularly useful when dealing with refs, as they might be null before 
the component is mounted or after it is unmounted.
The optional chaining operator helps handle such cases more gracefully.
*/
      // Now, we're selecting range
      passwordInputRef.current?.setSelectionRange(0, 100);
      window.navigator.clipboard.writeText(password);
      //Here, we used window object as it's core React Js..
      //But when we create the same thing in Next.Js then there's no window object since whole code get executed
      //inside the server.. then in such case we will not need to use window here. We just simply write navigator.
      //Also Here, we use .clipboard property of navigator object which gives us clipboard data..
      //And then we use .writeText(password) method to write text or password in clipboard..
    }, [password])
    //Here, we give password as dependency array in order to make sure whenever there will be any change 
    //in password then also callback will run.
    //Thus, useCallback as much as possible try to memorize the function and store it as cache..
    /*
    The useCallback hook is used to memoize functions, preventing unnecessary re-creations
    of the function on re-renders. It takes two arguments: the function you want to memoize and 
    an array of dependencies.
    +++++++++++++++++++++++ Note : ++++++++++++++++++++
    Overusing useCallback may lead to premature optimization.
    Only memoize functions when their recreations have a noticeable impact on performance.
    */


  return (
    <>
     {/* <h1 className='text-3xl text-center text-white'>Password Generator</h1> */}
     {/* It's just used for testing.. Now we design our actual UI.. */}
     <div className="w-full max-w-wd mx-auto text-black shadow-md
  rounded-2xl px-5 my-10 bg-gradient-to-r from-blue-500 to-purple-500">
    {/* w is width, md is medium and wd is wider than device screen. mx is margin x. px is padding x.
    my is margin y, bg-gradient-to-r means gradient starts from right to left direction. 
    from-blue-500 means start color blue and to-purple-500 means end color purple. */}
    <h1 className="text-white text-center my-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      {/* flex means it will take up full space in its container. 
      shadow means there will be a drop shadow around the element.
      rounded-lg means it has rounded large corners. 
      overflow-hidden means any content that exceeds this container will be hidden.
      mb-4 means margin bottom 4. */}
    <input type="text"
    value={password}
    className='outline-none w-full py-2 px-4 rounded-md'
    // outline-none means remove default styles of an input field.
    // w-full means it takes up full width of its parent container.
    placeholder='Here shows Password'
    readOnly
    //Here, we put readOnly because no any user can type in the input field..
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
        {/* Here, flex do not mean it will take up full space in its container.  
            But it will distribute items inside it evenly according to their width.
        Text-sm sets font size to small. Gap-x-2 sets horizontal spacing between two elements. */}
      <div className="flex items-center gap-x-1">
       {/* Here, items-center means align vertically center.
       gap-x-1 means horizontal spacing between two elements. */}
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
              // Here, prev does access the previous value from the function setAllowChar
              // .. You can also use counter keyword instead of prev..
              //(prev) => !prev is a arrow function that returns true or false based on the condition..
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

// +++++++++++++++++++ ::::::: NOTES :::::: ++++++++++++++++++
/*
useCallback hook will only re-execute the function if there's some changes in useCallback's dependency array's list
 and the useEffect hook will re-mount and re-render the whole component when there's any changes 
 in useEffect's dependency list of array...
*/
