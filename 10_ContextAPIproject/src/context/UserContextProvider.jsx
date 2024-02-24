import React, {useState} from "react";
import UserContext from "./UserContext";
//Here, below whatever prop is coming you can pass it inside callback..for eg; we're passing children variable here..
const UserContextProvider = ({children}) => {
    //Now, what to access from UserContext.Provider? You've to give data also naa? So define data here
    //and pass it as props in the UserContext.
    // const [user, setUser] = React.useState(null);
    //Here, u don't need to import useState once you write it as React.useState() ....
    //Here, if we want to add value inside this state then we have the method setUser
    //and the access of setUser can have from useContext which we've defined in Login.jsx where
    //we're giving the context i.e; UserContext...
    const [user, setUser] = useState(null)
    return(
        // Here, you've to wrap  your app with the context provider i.e;  <UserContext.Provider> and close it by
        // </UserContext.Provider>
        // and pass the user data as a value.
        <UserContext.Provider value={{user, setUser}}>
        {/* Here you can provide any other values that are required by your components..
        so, we are defining object in which we're giving access of user, setUser, or whatever u want */} 
        {/* //Also, Here we passed two values object {user, setUser} through props
        because when we do need user value to be accessed then we can directly access from another components.. */}
        {/* //And, If within the field of state  const [data, setData] = React.useState(null);  */}
        {children}
    {/* //Here, we're rendering the children which may be card's component or dashboard's component from card
        or may be anything else.. */}
        </UserContext.Provider>
    )
}

export default UserContextProvider;