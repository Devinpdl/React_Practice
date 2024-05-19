import React, {useEffect, useState} from 'react';
import './App.css'
import {useDispatch} from 'react-redux'

//Let's import authService
import authService from './appwrite/auth';

import {login, logout} from './store/authSlice'
import { Header,Footer } from './components';
import {Outlet} from 'react-router-dom'

function App() {
  //Now we do access .env variable in React if we do create our project using React and not from Vite as like below;
  // console.log(process.env.REACT_APP_APPWRITE_URL);
  //There's a separate method to access our environment variable if we're creating our app through Vite..
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  //Sometimes we have to forcefully unwrapped it using exclamation '!' as like below when using typescript;
  // console.log(import.meta.env.VITE_APPWRITE_URL!);

  //Taken from .env file where it shows error and didn't allowed us to do some comments;
//   REACT_APP_APPWRITE_URL="test environment"
// //Since we're creating our app through VITE it should be written as like below;
// VITE_APPWRITE_URL="test environment"

  //Taken from .env.sample file where it shows error and didn't allowed us to do some comments;
  // REACT_APP_APPWRITE_URL=""
//We do ignore .env file to send it into AWS or while doing deployement to any server's..
//Instead we do create a new .env.production file which will be used by the build process only and not in runtime.
//We do shift new .env.sample file to the deployement site..

//1st we do create loading state mechanism if we do send request to the network..
//So, on the basis of this, we can do conditional rendering by using if-else statement..
//.. means if true we do show loading icon and if false we do show our data..

const [loading,setLoading] = useState(true);
//Here, we did useState true coz as soon as App gets mounted its loading state is true..
//.. coz useEffect is doing some work and inside useEffect we do false for it..

// Now, we have to send dispatch to tell something like bring current user or do something else to change state..
//.. so to change the state dispatch must be used..
const dispatch = useDispatch();

//As soon as APP does get load, take useEffect and the from that useEffect ask to that service for..
//.. for the user islogged in or not..

useEffect(() => {
  //Ask authService for the Current user..
  authService.getCurrentUser()
  .then((userData)=> {
    //If we do have userData or not we do check it through conditional statement..
    if (userData) {
      //If we have userData we through dispatch..
      dispatch(login({userData})) // we did dispatch login and we did passed object inside it
      //where we've defined userData inside authReducer.js as payload..
    } else {
      //If we didn't get current user then we do logout and do the state change..
      dispatch(logout())
      
    }
  })
  .catch(() => dispatch(logout()))
  .finally(() => setLoading(false));
  //Here, we did setLoading to false coz once we get getCurrentUser data we do stop page loading.
}, []);
// }, [dispatch] );





  // return (
  //   <>
  //     <h1>Learn Creating Blog with Appwrite</h1>
  //   </>
  // )

  //We do conditional rendering now..
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-green-800 '>
      <div className='w-full block'>
        <Header />
        {/* If you need to display anything in-between the header and footer then you define main as like below; */}
        <main>
          TODO: 
          <Outlet /> {/* This Outlet renders the matched child route components */}
          {/* //This Outlet will help us to trigger Login or signup form when clicked on that child method(page) */}
        </main>
        <Footer />

        </div>
        </div>
  ) : null;
}

export default App;
