// how data is send is done in this file
import React, {useState, useContext} from 'react';
//We're importing UserCoontext too..

import UserContext from '../context/UserContext';


function Login() {
    //Using the state  hook to create a username and password variable that we can update as
    //users type into our inputs. We are also setting an empty object for errors which will be 
    //used to display any validation errors if they occur.
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //Now, to fetch the value that which is inside UserContext..
    //..For this, useContext does help on this matter..
    const {setUser} = useContext(UserContext)
    //We're accessing setUser from UserContextProvider.jsx...


    // Now, to handle the action of onClick we need to create a method for it.

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username,password})
        //Here, we're passing username and password as an object to the setUser..
    }


  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        onChange = {(e) => setUsername(e.target.value)}
        placeholder='username' />
        <br/>
        <input type='password'
        value={password}
        onChange = {(e) => setPassword(e.target.value)}
        placeholder='Enter password' />
        <br/>
        <button onClick={handleSubmit}>Login</button>
        
    </div>
  );
};

export default Login;