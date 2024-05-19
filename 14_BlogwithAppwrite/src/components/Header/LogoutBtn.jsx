import React from 'react'

//After the action of Logout happenning..
//You've to take some actions.. So for that you've to dispatch something..
//Simply that means you've to bring reducer from our store.js

import {useDispatch} from 'react-redux';

//Logout is actually under authService.js so we do have to import it too..
import authService from "../../appwrite/auth";

//Bring individual service of Logout
// import {logout} from '../../store/authReducer';
//We do bring it from appwrite;
import {logout} from '../../store/authSlice';
function LogoutBtn() {
    //1st we create dispatch
    const dispatch = useDispatch();
    //There will be creation of Logout Button, you've to create Logout Handler now;
    const logoutHandler = () => {
        //So when user click on this button then
        //It will call this function and perform logout operation
        // authService.logout();
        //And after performing logout operation
        //We'll just simply tell our Redux Store about this event by using Dispatch
        //Here in our case Action is logout and Payload is nothing because at this time there is no need of any data..
        //Here in our case Action will be logout and Payload will be null because we don't need any data here.
        //Most of the cases in Appwrite, all of things are the promises..
        //So, we can handle promises by using .then
        authService.logout().then(()=>{
            //Once Logged out successfully
            dispatch(logout());
             }) //.catch((error) => {
        //         throw error;
        // })
    }
  return (
        <button
        className='inline-block px-6 py-2 duration-150 hover:bg-green-300 rounded-3xl'
          // {/* Logout From Here */}
           onClick={logoutHandler}
           >Logout
          
        </button>
    
  )
}

export default LogoutBtn