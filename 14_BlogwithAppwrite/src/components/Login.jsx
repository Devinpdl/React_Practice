import React, {useState} from 'react'

//After login it does take Link and navigate to send them into some page isn't it..
//So, we do import link
import {Link , useNavigate } from "react-router-dom";  //React Router Dom is used for routing in our application. 
//It provides us with a way of navig "react-router-dom"   

//We do need login from authReducer or authSlice too..
// import {login} from '../store/authReducer'
//We can rename login as authLogin like below;
import {login as authLogin} from '../store/authSlice' //storeLogin is named as authLogin

import {Button, Logo, Input, Eye, EyeSlash } from './index'

//We do import of authService functionality for Login..
import authService from '../appwrite/auth'

//We do add now React Hook form
import {useForm} from 'react-hook-form'

//We do import dispatch too;
import {useDispatch} from 'react-redux'


function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Here we create state using use
    //We do bring useForm;
    const {register, handleSubmit} = useForm();
    // Now, we give another state for error handling if occurs;
    const [error, setError] = useState('');

    //To know if toogle happened inside password field;
    const [passwordType, setPasswordType] = useState("password");

    //Now, Let's create a method of Login using async
    const login = async (data) => {
        //First, set the error out;
        setError("");
        //Now, we do check if data goes or not;
        try{
            //If everything is fine then we call our own function in service file.
           const session= await authService.login(data);
            //Then, we navigate user to dashboard after successful login.
            if(session){
              const userData = await authService.getCurrentUser();
              //If we get userData then we've to do dispatch the method;
              if(userData) dispatch(authLogin(userData)); //we did bring login details from store.js
              //If user has come upto here by getting Logged in then make them able to navigate;
              navigate('/all-posts') //navigate them to route..
            }
        } catch (error) {
            // If there is an error we show it on screen.
            setError(error.message);
        }
    };

    //function for toggling password eye on off
  function togglePassword(type) {
    setPasswordType(type);
  }
  return (
    <div className='w-full justify-center flex items-center'
    >
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/15`}>
        {/* //Now, we bring logo here; */}
        <div className="mb-2 flex justify-center">
                    <span className="w-full inline-block max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-3xl font-bold text-slate-900 leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup" //If don't have account we do navigate or redirect users to signup
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        {/* //Now, after paragraph we do display error if error occured */}
        {/* {error ? <Alert type="error"  message={error} /> : null} */}
        {error && <p className='text-red-500 mt-8 text-center'> {error}</p>}
        <form className=" mt-8" onSubmit={handleSubmit(login)}>
          {/*  We use handleSubmit because form data will be sent when user press submit button.
          hansleSubmit is a method of useForm of React it's just like event when whole form is submitted..
            Don't be confused; there's a method {register, handleSubmit} = useForm;
            Note; Wherever you give list of  input fields; we use register for it; and whatever the values
            user give on that; you don't have to use state mgmt on that for synchronization(to know
            what's written on that input field); It'll automatically picks those written values 
            when handleSubmit event does get triggered as whole at last.. */}
          
            <div className='space-y-5'>
              {/* Email Field */}
              <Input
              label = "Email: "
              placeholder = 'Enter your email'
              //Here, we passed placeholder properties to input field but we didn't expected it inside the 
              //input field right?
              //But in Input.jsx we've displayed other properties inside input field through spread ...props !
              //So, Similary other properties can be passed..
              // name="email"
              type = "email"
              {...register("email",{
                //We're passing object in as its value;
                //This are also called options;
                required: true,
                // message:"Please Enter Your Email."},
                //Also here comes pattern which we call it as validate
                validate: {
                  //This function will run by default with empty string so we need to check
                  //whether field is not empty or
                  matchPattern: (value) =>  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
                    //Whatever value it gets; if if it tests with the given address then it's okay if not prompt must be valid
                    // email address.. Here; we did use .test(value) immediately after regex coz it must be checked and it's syntax..
                    //Look; For apply validation documentataion in React(useForm) if confused..

                },
              })}
              //Whatever input field you do make;
              //You've to spread the register which is part of useForm itself..
              //Spreading register will not overwrite if you do make other input field;
              //Inside register it has two value.. i.e; it's in key-value pair; here email is key..and;
              //{...register("email").value} 
              
              />

              {/* //Let's create another custom input field for password field; */}
              
              <div className="flex relative">
              <Input
              label= "Password: "
              placeholder ="Enter your password"
              // type="password"
              type={passwordType}
              {...register("password", {
                required: true,
              //   minLength: {
              //     value: 8,
              //     message: "Should have at least 8 characters long.",
              // },
                // validate: {
                //   matchPattern: (value) => {
                //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                //     .test(value) || "The password should contain at least one digit, one small letter, one capital letter, and be at least 8 characters long."
                //   }
                // }
            })}
              />
              {passwordType === "password" ? (
                            <Eye togglePassword={togglePassword} />
                             ) : (
                            <EyeSlash togglePassword={togglePassword} />
                             )}
            </div>
              <Button type="submit" className="w-full">
                                Sign in
                            </Button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Login