import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'

import store from './store/store.js'
//Now, we do import all of the pages in our routing;
import HomePage from "./pages/HomePage"
import AuthLayout from './components/AuthLayout'; // Correct import for Protected component
import Login from '../src/components/Login'
import AddPost from './pages/AddPost'
import Signup from './pages/Signup'; // Import SignupPage
import EditPost from './pages/EditPost'
import Post from './pages/Post'
import AllPosts from './pages/AllPosts'
import conf from './conf/conf';

console.log('Appwrite Configuration in main.js:', conf);


//After the sucessful creation of pages component, Now we do work for Routing;
//For that instead of <App /> component we do use
//<BrowserRouter> component from react-router-dom library
//For that 1st we do need router and can be created using createBrowserRouter()
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, //We're rendering App inside our element using createBrowserRouter
    children: [
      //Children itself is array;
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element: (
          //Parenthesis is just like wrapper;
          //You can send 2 or three elements using wrapper;
          //Now, we'll wrap every elements by AuthLayout which we've created previously
          //Just to check if the user is Authenticated or not..
          <AuthLayout authentication = {false}>
            {/* //We're passing manual data called authentication and make it false coz;
            //We're not authenticated yet; Coz we've made authentication = true in AuthLayout.jsx */}
            {/* //Inside AuthLayout now we need to import components as elements; */}
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
            <AuthLayout authentication={false}>
                <Signup />
            </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
            <AuthLayout authentication>
                {" "}
                <AllPosts />
            </AuthLayout>
        ),
    },
    {
        path: "/add-post",
        element: (
            <AuthLayout authentication>
                {" "}
                <AddPost />
            </AuthLayout>
        ),
    },
    {
        path: "/edit-post/:slug",
        //Here for path we have given name slug not id, don't be confused okay..
        element: (
            <AuthLayout authentication>
                {" "}
                <EditPost />
            </AuthLayout>
        ),
    },
    {
        path: "/post/:slug",
        element: <Post />,
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <App /> */}
    {/* We're routing from react's createBrowserRouter so commenting App components okay? */}
    <RouterProvider router={router} />
    {/* //Here, Javascript {} router i.e; {router} is the router which we have made at top above */}
    </Provider>
    {/* Now this <App /> has to be wrapped with provider above */}

  </React.StrictMode>,
)
