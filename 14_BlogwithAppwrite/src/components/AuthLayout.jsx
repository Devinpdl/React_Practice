//Let's talk about Authentication Layout..
//It's just a mechanism that how you protect pages and routes..
//In authReducer; we know that we've state which knows user is logged in or not..
//We're not using of this and how do we protect it?
//So, we do make one container and it'll just determine to show up the values or not to show..
import React, {useEffect, useState} from 'react'

// we do need selector so we do import it;
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'


export default function Protected({children, authentication = true}) {
    //Inside Protected we do check whether to render the child conditionally or not..
    //Here, we've defined the authentication properties as true.. but there may be case where;
    //Some components whoever calls this Protected function might giving the value false..
    //So for that reason we do check the Auth status.. value is true, empty or anything..
    const navigate = useNavigate();

     // State to manage loader display
    const [loader, setLoader] = useState(true);
    //Now, you have to ask the Auth status that user is logged in or not; // we ask this for Redux store;
    const authStatus = useSelector ((state) => state.auth.status);
    // Now, we do use useEffect which tells whether to direct you to login or to homepage;
    // If you are trying to access any page And if you are not logged in then
    // You should be redirected to Login Page
    useEffect(()=>{
        if (authentication && authStatus !== authentication) {
            //If user sends authentication true; now immediately we do check;
            //Is he logged In or Not ?
            //If yes -> Then let him go on
            //If No  -> Redirect him to login
            navigate("/login");
            // Here, understand the meaning of (authentication && authStatus !== authentication)
            // we know; L.H.S and R.H.S authentication = true;
            // But based on authStatus; either it's false or true;
            //Above logic becomes ; true && (false !== true) which is true.. False is not equal to true;
            // which is true itself.. then finally becomes (true && true) from false!== true. so it enters
            // inside the if block and redirects to login
            // It means: If User has sent authentication As I mentioned before, some times users
           // Might want to restrict only authenticate users can see the content
           // So they will send authentication=true;
           // But sometimes they might want to allow non Authenticated users too
           // So they will send authentication=false;
           // So here, firstly we do check
           // Is Authentication True Or False
           // If it's true then we do Check Auth Status
           // If both are same then simply let them Go On and show the component
           // Else We Do Redirect Them To Login Page

        } else if(!authentication && authStatus !== authentication) {
            // If authentication is not required and user is authenticated, redirect to homepage
            navigate("/");
        }
        // Set loader state to false after navigation logic execution
        setLoader(false);
        //Here, if above condition is running or not running the setLoader gets execute in anyway..
        //Because useEffect runs after render completed..
        //But Loader comes into picture when the Component starts Rendering..
        //So based on Loader we do show to the user..
        //When Loader is true show loading..
        //And When Loader is false hide it..
    } , [authStatus, navigate, authentication] )
  return loader ? <h1>Loading...</h1> : <>{children}</>
  //If you're not rendering children then the signup or login when clicked will not triggered or
  //will not give option of signup or login form..
}