// import React, {useState} from 'react'
// import  {authService} from '../appwrite/authservice'
// import {Link, useNavigate} from 'react-router-dom'
// import {login} from '../store/authReducer'
// import {Button, Input, Logo} from '../components/index'
// import {useDispatch} from 'react-redux'
// import {useForm} from 'react-hook-form'

// function Signup() {
//     const navigate = useNavigate();
//     const [error, setError] = useState('');
//     const dispatch = useDispatch();
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();

//     //Create a method to create a user account;
//     const createUserAccount = async(data) => {
//         //Empty out previous errors;
//         setError("");
//         try {
//             // Logic is; 1st use the service; and tell you're the signup;
//             //and inside signup I do like to create Account;
//             //Here, you have to give authService; and have to createAccount; For eg;
//             //You can take createAccount method from authReducer.js
//              // Call authService to create a new account
//            const userData= await authService.createAccount(data)
//            if(userData){
//             //If there comes userData then use the authService and call getCurrentUser() methods;
//             const userData= await authService.getCurrentUser();
//             //From this you've got userData and if u're able to get Current User then;
//             //dispatch that data in Redux Store (Means; Simply we're updating our store..)
//             if(userData) dispatch(login(userData));
//             //After successful registration redirect to dashboard;
//             navigate('/')
//            }
//         } catch (error) {
//             // Handle error if account creation fails
//             setError(error.message)
            
//         }
//     }
//   return (
//     <div className="flex items-center justify-center">
//     <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
//     {/* //Here, comes Logo; */}  {/* Logo section */}
//     <div className="mb-2 flex justify-center">
//                     <span className="inline-block w-full max-w-[100px]">
//                         <Logo width="100%" />
//                     </span>
//                 </div>
//                 <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
//                 <p className="mt-2 text-center text-base text-black/60">
//                     Already have an account?&nbsp;
//                     <Link
//                         to="/login"
//                         className="font-medium text-primary transition-all duration-200 hover:underline"
//                     >
//                         Sign In
//                     </Link>
//                 </p>
//                 {error && <p className="text-red-600 mt-8 text-center">{error}</p> }
//                 {/* //Here, if there's error(true in error) the we do display error in red text */}
//                 {/* //Now, we do need form */}
//                 <form onSubmit={handleSubmit(createUserAccount)}>
//                     {/* To get the data we've to use the register.. */}
//                     <div className='space-y-5'>
//                         <Input
//                         label = "Full Name:"
//                         placeholder = "Enter your full name"
//                         {...register("name",{
//                             required: true,
//                             validate : {
//                                 matchPattern : (value) => {
//                                     /^(?:([a-zA-Z]{2,4}\.){0,1} ?([a-zA-Z]{2,24})) ([a-zA-Z]{1,1}\. ){0,1}([a-zA-Z]{2,24} ){0,2}([A-Za-z']{2,24})((?:, ([a-zA-Z]{2,5}\.?)){0,4}?)$/
//                                     .test(value) || "Please Enter your valid Full Name"
//                                 }
//                             }
//                         })} 
//                         />
//                         <Input
//                         label="Email: "
//                         placeholder="Enter your email"
//                         type="email"
//                         {...register("email", {
//                             required: true,
//                             validate: {
//                                 matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
//                                 "Email address must be a valid address",
//                             }
//                         })}
//                         />
//                           {/* Password input field */}
//                         <Input
//                             label="Password: "
//                             placeholder="Enter password"
//                             name="password"
//                             type="password"
//                             {...register("password", {
//                                 required: true,
//                                 // minLength: {
//                                 //     value: 8,
//                                 //     message: "Should have at least 8 characters long.",
//                                 // },
//                                 validate: {
//                                     matchPattern: (value) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
//                                         .test(value) || "The password should contain at least one digit, one small letter, one capital letter, and be at least 8 characters long."
//                                 }
//                             })}
//                         />
//                         {/* Confirm Password input field */}
//                         <Input
//                             label="Confirm Password: "
//                             placeholder="Confirm password"
//                             name="confirmPassword"
//                             type="password"
//                             {...register("confirmPassword", {
//                                 required: true,
//                                 validate: {
//                                     confirmPassword: (value) => value === watch('password') || "Passwords do not match"
//                                 }
//                             })}
//                         />
//                         {/* Display error message if passwords don't match */}
//                         {errors.confirmPassword && <p className="text-red-600 mt-2">{errors.confirmPassword.message}</p>}
//                         {/* Signup Button */}
//                         <Button
//                             type="submit"
//                             className="w-full">
//                             Sign up
//                         </Button>
//                     </div>

//                 </form>
//     </div>
//     </div>
//   )
// }

// export default Signup

import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo, Eye, EyeSlash} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const [passwordType, setPasswordType] = useState('password');

    const create = async(data) => {
        setError("")
        try {
            // const { name, email, password } = data;
            // const userData = await authService.createAccount({ name, email, password })
            const userData = await authService.createAccount(data)
            //data parameters contains name , email and password..
            if (userData) {
                const currentUser = await authService.getCurrentUser()
                if(currentUser) dispatch(login(currentUser));
                navigate("/all-posts")
            }
        } catch (error) {
            setError(error.message)
        }
    }
    function togglePassword(type) {
        setPasswordType(type);
      }

    return (
        <div className="flex items-center justify-center">
                <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                        <span className="inline-block w-full max-w-[100px]">
                            <Logo width="100%" />
                        </span>
                    </div>
                    <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                        Already have an account?&nbsp;
                        <Link
                            to="/login"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
    
                    <form onSubmit={handleSubmit(create)}>
                        <div className='space-y-5'>
                            <Input
                            label="Full Name: "
                            placeholder="Enter your full name"
                            {...register("name", {
                                required: true,
                            })}
                            />
                    
                            <Input
                            label="Email: "
                            placeholder="Enter your email"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                                }
                            })}
                            />
                            {/* //For Password field; */}
                            <div className="flex relative">
                            <Input
                            label="Password: "
                            // type="password"
                            type={passwordType}
                            placeholder="Enter your password"
                            {...register("password", {
                                required: true,
                            })}
                            />
                            {passwordType === "password" ? (
                            <Eye togglePassword={togglePassword} />
                             ) : (
                            <EyeSlash togglePassword={togglePassword} />
                             )}
                            </div>

                            <Button type="submit" className="w-full">
                                Create Account
                            </Button>
                        </div>
                    </form>
                </div>
    
        </div>
      )
    }
    
    export default Signup