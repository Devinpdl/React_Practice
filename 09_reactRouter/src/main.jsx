import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'; // Import Route from react-router-dom
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import './index.css';
import Root from './components/Root.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx'; // Import User component
import Github, { githubInfoLoader } from './components/Github/Github.jsx';
import { useLoaderData } from 'react-router-dom';

//As we're talking routeProvider below, so now create router and put createBrowserRouter
// const router = createBrowserRouter([
//   { path: '/', 
//   // component: () => <div>Home</div>, exact: true },
//   //this can be done as like this...
//   //Here slash is top-level element of our app and inside of it what does it render.. so tell it..
//   //Here, elements is getting rendered...
//   element: <Root /> ,
//   children: [
//     {
//       path: "",
//      element: <Home />
//     },
//     {
//       path: 'About',
//       element: <About />
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     },

//   ]
// }
// ])
//We can create router same like above in the simple way as like below;

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      {/* If the coder has used outlet then he will have to give top level route path and then
      all child routes will become nested under that particular route. */}
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}>
        {/* You can also nested the about page under home page like this: */}
        <Route path = 'Somewhere' />
        </Route>


        <Route path='contact' element={<Contact/>}/>
        <Route path='user/:userid' element={<User/>}/>
        <Route
        loader={
          //Now, we're using the concept of GithubInfoLoader which is defined in Github.jsx..
          //Actually loader uses callback function to get data from server..
          githubInfoLoader
          //Once we want load the data before render and have commented function Github in Github.jsx,
          //Then, you've to use the Hook for it to load the data before rendering..
          //So. you've to use/import useLoaderData hook to load data when using react router..
          //And, Once you import  useLoaderData, you've to define it inside funtion Github in Github.jsx...
        }
        //Each route can define a "loader" function to provide data to the route element before it renders.
         path='github'
         element={<Github/>}
         />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* //Here, we don't need to render the App as we were using react router and also
    that we were talking inside App.jsx.. */}
    {/* //Now, we're moving towards Router.. */}
    <RouterProvider router = {router} />
    {/* //React RouterProvider is self closing component and it takes props..
    //So, we can pass our app (which contains all of our routes) in its prop
    //Thus, we pass router inside RouterProvider and takes router variable like : {router}.. */}



  </React.StrictMode>,
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

