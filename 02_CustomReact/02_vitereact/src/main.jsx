import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import MainComponent from './MainComponent';

//Below App is just a function in App.jsx component also right?
//Now, let's try can we declare a function inside of main.jsx?

function MeroApp(){
  return(
    <>
    <h1>Our Custom APP in Vite</h1>
    {/* <h1>We are executing from MeroApp() Function Now.</h1> */}
    </>
  )
} // //....This MeroApp will become reactElement(I.e; anchor hyperlink) through getting parsed 
//at the end of the day right?
//If we do put custom react element directly inside of the main.jsx will it run? Let's see;
//We're taking reactElement from the references of of customreact.js
// const reactElement = {
//   type: 'a' , // the type of the React element, can be 'div' or 'p'
//   props: {
//       href: 'https:www.youtube.com',
//       target:'_blank',
//       // children: ['Click here for Youtube']
//       //Below we use  if(propName==='children') continue; just for sake of discarding the execution
//       //from props if coder defined children inside props.
//   },
//   children: 'Click me to visit Youtube' //It is the content to be placed inside the element.

// }  //Lets make reactElement another way.

//another part;
//Let's do the same that we did in App.jsx for <h2>Your Username is: {username}</h2>
const anotherUser = "Subas_paudel";

const reactElement= React.createElement(
  'a', //This is the type and it's anchor, // It can be 'p' tag or 'h1' or whatever u want.
  // 'p', // Doing so you can see p tag when u do inspect in your browser.
  {href:"https://www.google.com",target:"_blank"},
  'Click Here to Visit Google'
  //Here, if we have to inject anotherUser then where to inject it?
  //We know that after creation of whole tree..Then only the part of variable injection comes.
  //Thus anotherUser have to be injected here;
  ,
  anotherUser
)

//For the comment below;
  //... For this cmt=This reactElement doesn't run actually...Because .render will expect some well defined
  // parameters that is returned by const reactElement above..

  //Let's do;
  const anotherElement = (
    <a href='https:www.youtube.com' target='_blank'> Visit Youtube from anotherElement </a>
  )


ReactDOM.createRoot(document.getElementById('root')).render(
  //In our customreact.js we had our own customRender as customRender(reactElement,mainContainer).
  //But in main.jsx we're using render of React library.
  //So instead of calling customRender we called createRoot().
  //And then used .render() method on it which takes two params first one is the react
  //element and second one is where should this element be rendered i.e., in what container
  //Here we are giving id root from index.html file.
  //So now whenever this script runs it will look for the div with id="root" and
  //then it will place our Element there.
  // <React.StrictMode>
    // <App />
    //Here, Instead of App can we give above MeroApp?
    //Let's try
    // <MeroApp />
    //Here it above <MeroApp /> can be executed even if we call it as MeroApp(); like;
    // MeroApp()
    //We know we can execute as like this.. But do this way.. 
    //Do This way as just like above;
    // <MeroApp />
    //Let's try running reactElement as like <MeroApp />
    // reactElement
    //This reactElement doesn't run actually...Because .render will expect some well defined
    // parameters that is returned by const reactElement above..
    //Let's check out for anotherElement and what it does?
    // anotherElement
    //What anotherElement is doing here?
    //This anotherElement is converting to object okay..
    //And that's why above reactElement doesn't work as like anotherElement is running because
    //reactElement is having value in key:value pair...
    //But anotherElement is not having any such thing so it is running directly without giving any kind
    //of warning or error..
    //Now, Let's run above above reactElement that which is created using React.createElement.
    // reactElement
    // It is taking all the properties given in its own props property and putting into HTML anchor tag
    //But what If I want to pass the reactElement dynamically into render().. How
    //Can We Do That?
    //The Answer Is... We Can Pass It As Props To The Main Component & Then Inside MainComponent Use It Like This..
    //{props.element}
    //So Here We Are Giving Our Element As A Prop To The Main Component
    //And In MainComponent We Will Access It And Render It Using {props.element}.
    //MainComponent Is Not Just Any Other Component.. It Is The Entry Point Of Our Application.
    //That Means Whenever User Opens Our WebPage He/She Will See Whatever
    //Is There In The Return Statement Of MainComponent Function.
    //Inside Return Statement We Will Render Our Custom Made ReactElement.
    // So Now Let's Try Running Below Code
    // <MainComponent myElement={reactElement}/>
  // {/* </React.StrictMode>, */}
  //For part of injecting variables and Javascript that we doing inside App.jsx
  // <App />
  //Now to check for the part of //....//Here, if we have to inject anotherUser then where to inject it?
  //Let's run reactElement of the above const reactElement= , that we have created
  reactElement
)
