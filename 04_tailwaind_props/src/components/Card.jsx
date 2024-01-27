// We created components folder and then we created Card.jsx file inside of it inside src folder
//We did this to understand the part of props(that we have talked inside App.jsx)
import React from 'react'

// function Card() {
    //props to have access of every function, so above Card function can be written as;
    // function Card(props) {
        //By default react does calls it props.. 
        //let's check what value does come from it? .. We do console for this.
        // console.log("Your props:",props);
        //It returns empty object right?
        //Now, how can we fill the value of above console props. Let's see inside App.jsx's <Card /> okay?
        //After doing our job inside <Card /> in Card.jsx we can learn that;
        //by using <Card subject="Learn React" giveAnyname= {passObject} /> we can pass this inside props..Okay
        //Above function Card(props) is the orginal syntax but we can use in our own way as like below too;

        // function Card(props) {
        //     //here, we are accessing subject from Card.jsx's <Card /> tag..
        //     console.log(props.subject);

            //Most of the time by using destructuring method we can directly use props as like below;

            // function Card({subject}) {
            //     console.log(subject);
//Now, we don't need to use props.subject everywhere.. you can use directly use subject..

//Now, let's see how by the help of React's props how we can pass value/object to the our card slot?
        
//You can see how we're changing the value inside


//Now, For the part of App.jsx's = (Now, if you want to pass props for the button too, then how we do it? Let's see)
//To implement for ourbtnText's props you have to implement props inside function as below;
// function Card ({subject, ourbtnText}){
//   console.log("Your btn Value is:",ourbtnText);
  //We passed props object for our button by doing comma and directly giving it's value inside the func...

  //Now, if hundreds of users are coding and might have forgotton to give the value inside the button
  //..button's card then you can default value as like below;

  function Card ({subject, ourbtnText ="Here's Default/Click Me"}){
    console.log("Your btn Value is:",ourbtnText);

    //To check if this is working or not..Inside of App.jsx's (<Card subject="Learn React" ourbtnText='Here we Go'/>)
    //We do make blank value inside 'ourbtnText' variables..
        

  return (
    // <div>Card</div>
    //Instead of creating this div let we make our own div
    //And pass a prop into it so that we can use it in JSX
    <>
    <h1 className="bg-green-400 text-black p-6 rounded-xl mb-7">Our Testing</h1>
    <div className="relative h-[400px] w-[300px] rounded-md">
<img
  src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
  alt="AirMax Pro"
  className="z-0 h-full w-full rounded-md object-cover"
/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-left">
  {/* <h1 className="text-lg font-semibold text-white">Delba</h1> */}
  {/* Here, we do pass props inside h1 tag to change the value of user Delba; */}
  <h1 className="text-lg font-semibold text-white">{subject}</h1>
  <p className="mt-2 text-sm text-gray-300">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    debitis?
  </p>
  {/* <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    View Profile →
  </button> */}
  {/* Now, we want to pass props inside our btn yes? Then let's see how we do it; */}
  <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
   {ourbtnText} →
  </button>
</div>
</div>
  </>
)
}

export default Card