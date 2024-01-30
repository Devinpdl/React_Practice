import {useState} from 'react'
function App() {
  const [color, setColor] =  useState("darkgreen");
  //Here, we setting the default bg color as darkgreen

  return (
      <div className='w-full h-screen duration-150'
      //Here, we're using tailwind..For better understanding install tailwind extension in vs code..
        style = {{backgroundColor: color}}
        //This is how we are applying our state to inline css...
        //The use of double curly braces is compulsory when we want to display js variable inside html.
        //Here, color is our js variable which holds value of our state(which is initially "darkgreen")
        //Here, we didn't give color a curly braces because we had already givin double curly braces..
      >
        <div className='fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-3 forced-color-adjust-auto'>
          <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white
          px-2 py-2 rounded-2xl'>
          <button onClick={()=>setColor('gold')}
          // Here, setColor is our callback function where we're calling setColor function 
          // and setting the parameter to "gold"  when clicked which then passes this parameter to useState.
          className='outline-none px-3 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor:'gold'}}
          >Gold</button>
          <button onClick={()=>setColor('green')}
          className='outline-none px-3 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor:'green'}}
          >Green</button>
          <button onClick={()=>setColor('pink')}
          className='outline-none px-3 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor:'pink'}}
          >Pink</button>
          <button onClick={()=>setColor('red')}
          className='outline-none px-3 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor:'red'}}
          >Red</button>
             <button onClick={()=>setColor('blue')}
          className='outline-none px-3 py-1 rounded-xl text-white shadow-lg'
          style={{backgroundColor:'blue'}}
          >Blue</button>
          </div>
          </div>

      </div>
    
  )
}

export default App
