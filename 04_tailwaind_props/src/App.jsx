// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1 className="bg-green-400 text-black p-6 rounded-xl">Our Testing</h1>
//       <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
//   <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
//   src="https://render.fineartamerica.com/images/rendered/default/canvas-print/27.5/36/mirror/break/images/artworkimages/medium/2/papaji-nihal-singh-rathore-canvas-print.jpg" alt="" width="384" height="512" />
//   <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
//     <blockquote>
//       <p class="text-lg font-medium">
//         “Sri H.W.L. Poonja, lovingly referred to as Papaji, was born on October 13, 1910, in a part of the Punjab that is now in Pakistan.

// He had his first direct experience of the Self at the age of nine. He met his Master, Sri Ramana Maharshi, in 1944. Shortly afterwards he realized the Self in the presence of his Master. Being a householder, he continued to work and support the many members of his extended family until his retirement in 1966. After extensive travel Papaji settled down in Lucknow, India, where he received visitors from around the world. He left the body on September 6, 1997.”
//       </p>
//     </blockquote>
//     <figcaption class="font-medium">
//       <div class="text-sky-500 dark:text-sky-400">
//         H.W.L Poonja Ji
//       </div>
//       <div class="text-slate-700 dark:text-slate-500">
//         Spiritual Master, Lucknow, India
//       </div>
//     </figcaption>
//   </div>
// </figure>
//     </>
//   )
// }

// export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let we do for below this part ; {/* There's also another way of passing values in props. Let's see;...*/}
  let passObject = {
    name: "Himanshu",
    age: 32,
    profession: "Software Developer",
  }


  return (
    //here mb-7 means margin bottom.
    //Now, let understand the props.
    /*
    props makes the component as reusable..
    Props are like data that we can pass to a component so it knows how to render itself
    For eg; If you had made a card just for one time, then why not to put this in one component
    and if next time you want to make another card with different design or color or size etc.,
    So instead of making new components everytime, you just simply pass these details through props.

    */
    <>
      {/* <h1 className="bg-green-400 text-black p-6 rounded-xl mb-7">Our Testing</h1> */}
      {/* <div class="relative h-[400px] w-[300px] rounded-md">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">Delba</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div> */}
{/* <Card /> */}
{/* <Card /> */}
{/* Here in both card there's a name called Delba.. But there may be a case where you want to 
show some other user's profile...So what do you do ? You will have to change everything
or create a whole new component which is not good practice.So now Instead, you just pass
the name through props. */}
{/* props do have access of every function even the function App() */}
{/* ..........Continuation from Card,jsx.... ;
//Now, how can we fill the value of above console props. Let's see inside App.jsx's <Card /> okay? */}
{/* //... For continuation of this 87 line comments... , Let's see; */}
{/* <Card subject=" Learn React" checkArr=[1,2,3,4] /> */}
{/* This doesn't work right? Now let's see if we can pass value of props as like below;*/}

{/* <Card subject="Learn React" checkArr={name:'Simulator'}/> */}
{/* It shows error because we cannot directly give objects into array. We need to use curly
braces {} . And also 'name' should not be quoted. Because when we write quote around
anything it becomes string so 'name':'Simulator' becomes ['name','Simulator'] */}
{/* So correct way is : */}
{/* <Card subject="Learn React" checkArr={{name:"Simulator"}} /> */}
{/* Now, the props is passing value right? You can see this in console now. */}
{/* There's also another way of passing values in props. Let's see;...*/}
{/* <Card subject="Learn React" giveAnyname= {passObject} /> */}
{/* Now to update the name of Card */}
{/* <Card subject="Learn React"/> */}
{/* Again if you want to pass another username, then you can do this through props as like below; */}
{/* Here, we've used subject term for the username value, don't get confused.. */}
{/* <Card subject="Learn VueJS" username="anyusername" /> */}
{/* Now, if you want to pass props for the button too, then how we do it? Let's see */}
<Card subject="Learn VueJs" ourbtnText="Click Me/Learn More" />
{/* For another card's button, we want to pass props inside it too..  */}
{/* <Card subject="Learn React" ourbtnText='Here we Go'/> */}
{/* Now, we're checking if function of Card.jsx is passing its default value or not inside ourbtnText variables 
if coders didn't passed the variable ourbtnText as just like below;*/}
<Card subject="Learn React"/>
    </>
  )
}

export default App
